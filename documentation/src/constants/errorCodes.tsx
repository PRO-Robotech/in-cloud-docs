import { TRespondsCodes } from '../customTypes/errorCodes'

export const RESPOND_CODES: TRespondsCodes = {
  ok: {
    grpcCode: 'OK',
    httpCode: '',
    grpcNumber: '0',
    description: 'Успешный ответ',
  },
  cancelled: {
    grpcCode: 'CANCELLED',
    httpCode: '',
    grpcNumber: '1',
    description: 'Операция была отменена',
  },

  unknown: {
    grpcCode: 'UNKNOWN',
    httpCode: '',
    grpcNumber: '2',
    description: 'Неизвественая ошибка',
  },

  invalid_argument: {
    grpcCode: 'INVALID_ARGUMENT',
    httpCode: '400',
    grpcNumber: '3',
    description: 'Пользователь указал некорректные значения агрументов',
  },
  deadline_exceeded: {
    grpcCode: 'DEADLINE_EXCEEDED',
    httpCode: '',
    grpcNumber: '4',
    description: 'Запрос не успел вовремя обработать информацию',
  },
  not_found: {
    grpcCode: 'NOT_FOUND',
    httpCode: '404',
    grpcNumber: '5',
    description: 'Не найден метод',
  },
  already_exists: {
    grpcCode: 'ALREADY_EXISTS',
    httpCode: '',
    grpcNumber: '6',
    description: 'Данный объект уже существует',
  },
  permition_denied: {
    grpcCode: 'PERMISSION_DENIED',
    httpCode: '',
    grpcNumber: '7',
    description: 'Доступ запрещен',
  },
  resource_exhausted: {
    grpcCode: 'RESOURCE_EXHAUSTED',
    httpCode: '',
    grpcNumber: '8',
    description: 'Недостаточно места для добавления информации',
  },
  failed_precondition: {
    grpcCode: 'FAILED_PRECONDITION',
    httpCode: '',
    grpcNumber: '9',
    description: 'Не выболнены усполовия предварительного запроса',
  },
  aborted: {
    grpcCode: 'ABORTED',
    httpCode: '',
    grpcNumber: '10',
    description: 'Операция была отменена',
  },
  out_of_range: {
    grpcCode: 'OUT_OF_RANGE',
    httpCode: '',
    grpcNumber: '11',
    description: 'Операция превысила допустимое значение',
  },
  unimplemented: {
    grpcCode: 'UNIMPLEMENTED',
    httpCode: '',
    grpcNumber: '12',
    description: 'Данная операциия не поддерживается или не была реализована',
  },
  internal: {
    grpcCode: 'INTERNAL',
    httpCode: '500',
    grpcNumber: '13',
    description: 'Ошибка в указанных данных',
  },
  unavailable: {
    grpcCode: 'UNAVAILABLE',
    httpCode: '',
    grpcNumber: '14',
    description: 'Сервис временно недоступен',
  },
  data_loss: {
    grpcCode: 'NOT_FDATA_LOSSOUND',
    httpCode: '',
    grpcNumber: '15',
    description: 'Данные были повреждены или утеряны',
  },
  unauthenticated: {
    grpcCode: 'UNAUTHENTICATED',
    httpCode: '',
    grpcNumber: '16',
    description: 'У пользователя недостаточно прав для использования этого метода',
  },
}
