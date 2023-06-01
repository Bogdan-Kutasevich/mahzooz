export interface System {
  last_draws: LastDraws,
  last_draws_ids_list:LastDrawsIds,
  lotteries: {
    [key: number]:LotteriesInfo
  }
  next_draws: {
    [key: number]: Array<NextLotteries>
  }
  next_draws_ids_list: {
    [key: number]: Array<number>
  }
  player_register_mandatory_fields: Array<string>
  products: Array<any>
  system_currency_id: string
  timestandard: string
}

export interface LastDraws {
  [key: number]: LastDraw
}

export interface LastDraw {
  [key: number]: LastDrawInfo
}

export interface LastDrawInfo {
  [key: number]: DrawInfo
}

export interface DrawInfo {
  cut_off_datetime: string
  draw_date: string
  draw_id: string
  draw_time: string
  draw_titles: string | null
  has_raffle: string
  jackpot: string
  lottery_id: string
  numbers: string
  prize_2nd: string
  raffle_results: Array<any>
  win_classes: Object
  win_persons: Object
}

export interface LastDrawsIds {
  [key: number]: Array<number>
}

export interface LotteriesInfo {
  actual_jackpot: string
  additional_numbers_drawn: string
  additional_numbers_total: string
  class_sorting: string
  drawn_on_days: Array<number>
  lottery_id: string
  main_numbers_drawn: string
  main_numbers_total: string
}

export interface NextLotteries {
  [key: number]: Array<NextLotteriesInfo>
}

export interface NextLotteriesInfo {
  cut_off_datetime: string
  draw_date: string
  draw_id: string
  draw_time: string
  draw_titles: string | null
  has_raffle: string
  jackpot: string
  lottery_id: string
  prize_2nd: string
  raffle_results: {
    [key: number]: RaffleResults
  }
}
export interface RaffleResults {
  [key: number]: {
    prize: number
  }
}

export interface ProductInfo {
  id: string
  lotteries: Array<string>
  title: string
}

