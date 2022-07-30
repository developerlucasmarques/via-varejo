import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { CheckoutDto } from './dto/checkout.dto';
import { ApiInterestRate } from './types/apiInteresRate.type';
import { CaculateInterestRateResponse } from './types/calculateInterestRateResponse.type';
import { CheckoutResponse } from './types/checkoutResponse.type';

@Injectable()
export class AppService {
  constructor(private readonly httpService: HttpService) {}

  async checkout(dto: CheckoutDto): Promise<CheckoutResponse[]> {
    const totalMinusEntry: number =
      dto.product.total - dto.paymentCondition.entryValue;

    const installmentsAmount: number = dto.paymentCondition.installmentsAmount;
    let interestAmountEachMonth: number = 0;
    let interestRatePerMonth: number = 0;

    if (installmentsAmount > 6) {
      const interestRateAndinterestAmountEachMonth =
        await this.calculateInterestRateForTheLast30Days(totalMinusEntry);

      interestAmountEachMonth =
        interestRateAndinterestAmountEachMonth.InterestAmountEachMonth;

      interestRatePerMonth =
        interestRateAndinterestAmountEachMonth.interestRate;
    }

    const valueOfEachInstallmentWithInterest: number = +(
      totalMinusEntry / installmentsAmount +
      interestAmountEachMonth
    ).toFixed(2);

    let response: CheckoutResponse[] = [];

    for (let i = 1; i <= installmentsAmount; i++) {
      response.push({
        installmentNumber: i,
        value: valueOfEachInstallmentWithInterest,
        interestRate: interestRatePerMonth,
      });
    }

    return response;
  }

  async calculateInterestRateForTheLast30Days(
    totalMinusEntry: number,
  ): Promise<CaculateInterestRateResponse> {
    const { data } = await this.httpService
      .get<ApiInterestRate[]>(
        'https://api.bcb.gov.br/dados/serie/bcdata.sgs.11/dados/ultimos/30?formato=json',
      )
      .toPromise();

    let interestRateForTheLast30Days: number = 0;

    data.forEach((element: ApiInterestRate) => {
      interestRateForTheLast30Days += +element.valor;
    });

    const InterestAmountEachMonth =
      totalMinusEntry * (interestRateForTheLast30Days / 100);

    return {
      interestRate: +interestRateForTheLast30Days.toFixed(2),
      InterestAmountEachMonth: +InterestAmountEachMonth.toFixed(2),
    };
  }
}
