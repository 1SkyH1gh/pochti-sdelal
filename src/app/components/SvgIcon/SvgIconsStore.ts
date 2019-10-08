export type SvgIconMeta = {
    path: string,
    width: number,
    height: number,
}

export class SvgIconsStore {

    /** 20 */

    static readonly CHILD__20 = createMeta_size20('20/child.svg');
    static readonly EDIT_PHOTO__20 = createMeta_size20('20/edit-photo.svg');
    static readonly CALENDAR_1__20 = createMeta_size20('20/calendar-1.svg');
    static readonly CALENDAR_5__20 = createMeta_size20('20/calendar-5.svg');

    /** 25 */

    static readonly ARROW_DOWN__25 = createMeta_size25('25/arrow-down.svg');
    static readonly BABY_SEAT__25 = createMeta_size25('25/baby-seat.svg');
    static readonly CURRENCY__25 = createMeta_size25('25/currency.svg');
    static readonly DISABLED__25 = createMeta_size25('25/disabled.svg');
    static readonly DRIVER_EXP__25 = createMeta_size25('25/driver-exp.svg');
    static readonly EMAIL__25 = createMeta_size25('25/e-mail.svg');
    static readonly EXTRA_LUGGAGE__25 = createMeta_size25('25/extra-luggage.svg');
    static readonly EXTRA_LUGGAGE_2__25 = createMeta_size25('25/extra-luggage-2.svg');
    static readonly FULLNAME__25 = createMeta_size25('25/fullname.svg');
    static readonly LANGUAGE__25 = createMeta_size25('25/language.svg');
    static readonly LUGGAGE_SMALL__25 = createMeta_size25('25/luggage-small.svg');
    static readonly LUGGAGE_MEDIUM__25 = createMeta_size25('25/luggage-medium.svg');
    static readonly LUGGAGE_BIG__25 = createMeta_size25('25/luggage-big.svg');
    static readonly NAME_SIGN__25 = createMeta_size25('25/name-sign.svg');
    static readonly PHONE__25 = createMeta_size25('25/phone.svg');
    static readonly STOLLER__25 = createMeta_size25('25/stoller.svg');
    static readonly TICKET__25 = createMeta_size25('25/ticket.svg');

    /** 30 */

    static readonly CATALANIA__30 = createMeta_size30('30/catalania.svg');
    static readonly ENGLISH__30 = createMeta_size30('30/english.svg');
    static readonly FRENCH__30 = createMeta_size30('30/french.svg');
    static readonly GERMANY__30 = createMeta_size30('30/germany.svg');
    static readonly ITALIAN__30 = createMeta_size30('30/italian.svg');
    static readonly JAPANESE__30 = createMeta_size30('30/japanese.svg');
    static readonly KOREA__30 = createMeta_size30('30/korea.svg');
    static readonly RUSSIA__30 = createMeta_size30('30/russia.svg');
    static readonly SPAIN__30 = createMeta_size30('30/spain.svg');

    static readonly CLOCK_1__30 = createMeta_size30('30/clock-1.svg');
    static readonly CLOCK_2__30 = createMeta_size30('30/clock-2.svg');
    static readonly DISABLED__30 = createMeta_size30('30/disabled.svg');
    static readonly CALENDAR_1__30 = createMeta_size30('30/calendar-1.svg');
    static readonly CALENDAR_5__30 = createMeta_size30('30/calendar-5.svg');
    static readonly PASSENGER__30 = createMeta_size30('30/passenger.svg');
    static readonly POINT_CAR__30 = createMeta_size30('30/point-car.svg');
    static readonly SIGN_CLIENT__30 = createMeta_size30('30/sign-client.svg');
    static readonly SIGN_DRIVER__30 = createMeta_size30('30/sign-driver.svg');
    static readonly STEP_1_ACTIVE__30 = createMeta_size30('30/step-1-active.svg');
    static readonly STEP_2__30 = createMeta_size30('30/step-2.svg');
    static readonly STEP_2_ACTIVE__30 = createMeta_size30('30/step-2-active.svg');
    static readonly RETURN__30 = createMeta_size30('30/return.svg');

    static readonly DOLLAR__30 = createMeta_size30('30/dollar.svg');
    static readonly DOLLAR_ACTIVE__30 = createMeta_size30('30/dollar-active.svg');
    static readonly EURO__30 = createMeta_size30('30/euro.svg');
    static readonly EURO_ACTIVE__30 = createMeta_size30('30/euro-active.svg');
    static readonly YUAN__30 = createMeta_size30('30/yuan.svg');
    static readonly YUAN_ACTIVE__30 = createMeta_size30('30/yuan-active.svg');
    static readonly BAHT__30 = createMeta_size30('30/baht.svg');
    static readonly BAHT_ACTIVE__30 = createMeta_size30('30/baht-active.svg');
    static readonly RUBLE__30 = createMeta_size30('30/ruble.svg');
    static readonly RUBLE_ACTIVE__30 = createMeta_size30('30/ruble-active.svg');

    /** 35 */

    static readonly EDIT__35 = createMeta_size35('35/edit.svg');

    /** 38x28 */

    static readonly CARD__38_28 = createMeta_size38x28('38_28/card.svg');
    static readonly CHARGER__38_28 = createMeta_size38x28('38_28/charger.svg');
    static readonly WATER__38_28 = createMeta_size38x28('38_28/water.svg');
    static readonly WIFI__38_28 = createMeta_size38x28('38_28/wifi.svg');

    /** 40 */

    static readonly CREATE_AREA__40 = createMeta_size40('40/create-area.svg');
    static readonly DELETE_AREA__40 = createMeta_size40('40/delete-area.svg');
    static readonly ACCOUNT__40 = createMeta_size40('40/account.svg');

    /** 42 */

    static readonly FACEBOOK__42 = createMeta_size42('42/facebook.svg');
    static readonly GOOGLE__42 = createMeta_size42('42/google.svg');
    static readonly VK__42 = createMeta_size42('42/vk.svg');

    /** 50 */

    static readonly PHOTO__50 = createMeta_size50('50/photo.svg');
    static readonly PLUS__50 = createMeta_size50('50/plus.svg');

    /** 160 */

    static readonly DELETE__160 = createMeta_size160('160/delete.svg');
    static readonly PASSWORD__160 = createMeta_size160('160/password.svg');
    static readonly PAYMENT__160 = createMeta_size160('160/payment.svg');
    static readonly TELEGRAM__160 = createMeta_size160('160/telegram.svg');
}

function createMeta_size20(path: string) : SvgIconMeta {
    return createQuad(path, 20);
}

function createMeta_size25(path: string) : SvgIconMeta {
    return createQuad(path, 25);
}

function createMeta_size30(path: string) : SvgIconMeta {
    return createQuad(path, 30);
}

function createMeta_size35(path: string) : SvgIconMeta {
    return createQuad(path, 35);
}

function createMeta_size40(path: string) : SvgIconMeta {
    return createQuad(path, 40);
}

function createMeta_size42(path: string) : SvgIconMeta {
    return createQuad(path, 42);
}

function createMeta_size50(path: string) : SvgIconMeta {
    return createQuad(path, 50);
}

function createMeta_size160(path: string) : SvgIconMeta {
    return createQuad(path, 160);
}

function createMeta_size38x28(path: string) : SvgIconMeta {
    return createCustomSize(path, 38, 28);
}

function createQuad(path: string, size: number) : SvgIconMeta {
    return create(path, size, size);
}

function createCustomSize(path: string, width: number, height: number) : SvgIconMeta {
    return create(path, width, height);
}

function create(path: string, width: number, height: number) : SvgIconMeta {

    import('app/svg/' + path);

    return {
        path: path,
        width: width,
        height: height
    }
}
