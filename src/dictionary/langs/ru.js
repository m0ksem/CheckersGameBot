const en = require('./en');

module.exports = {
  ...en,
  langName: 'Русский',
  langCode: 'ru',

  Turn: 'Ход',
  White: 'Белый',
  Black: 'Чёрный',

  yes: 'да',
  no: 'нет',

  message: {
    cantMove: 'Вы не можете сюда походить.',
    beatRequired: 'Вы обязаны бить.',
    somethingWrong: 'Что-то пошло не так. Обратитесь к разработчику.',
    onlyBlack: 'Вы можете ходить только на чёрный клетки.',
    youCantPlayVsYou: 'Вы не можете играть против себя.',
    win: ' победитель!',
    checkerNotPicked: 'Сначала нужно выбрать шашку.',
    waitForYourTurn: 'Дождитесь своего хода.',
    unknownUser: 'Вы не можете играть в эту партию.',
  },
  buttons: {
    clickToStart: 'Нажмите чтобы начать игру!',
    play: 'Играть!',
    settings: 'Настройки',
    playAsWhite: 'Играть за белых',
    playAsBlack: 'Играть за чёрных',
    switchLang: 'Change language',
    back: 'Назад',
    changeSkin: 'Изменить внешний вид фишек',
    visitTelegramChannel: 'Телеграм канал',
    sendNewTable: 'Сделать новый стол',
    sendNewTableToChat: 'Отправить игровой стол в чат',
    beatingRequired: 'Бить обязательно',
    donate: 'Поддержать',
  },
  captions: {
    sendTable: 'Отправить стол!',
    sendTableDescription: 'Отправит игровой стол в этот чат',
    waitingForLastPlayer: 'Ждем последнего игрока!',
    menu: 'Выберите цвет и начните играть.',
    settings: 'Вы можете поменять язык.',
    yourGameIsReady: 'Игра была создана!',
    yourGameIsEnded: 'Сессия игры больше недоступна.\n\nСкорее всего бот обновился.\nНо возможно произошла какая-то ошибка. Если бот не будет работать через пару минут, то напишите мне https://t.me/m0ksembotschat',
    selectSkin: 'Выберите оформление для игры.',
    selectLanguage: 'Выберите язык.',
    moreLater: 'Скоро другие оформления!',
    startText: 'Напиши `@GameCheckersBot start` в любом чате чтобы отправить игровой стол.\n\nПосмотри дополнительную информацию: https://teletype.in/@m0ksem/iLy89MQwA',
  },
  skins: {
    moons: 'Луны - стандартный скин',
    sweets: 'Сладости',
    animals: 'Животные',
  },
};
