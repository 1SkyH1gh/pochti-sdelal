import * as React from "react";
import classnames from 'classnames';
import {IMaskInput} from 'react-imask';
import './style.module.scss';
import {ChangeEvent} from "react";

export enum BaseInputType {
    NUMBER,
    TEXT,
    DATE,
    TIME,
    EMAIL,
    PASSWORD,

}

export enum BaseInputSize {
    XS,
    S,
    M,
}

export type MaskOptions<T> = {
    mask: new () => T,
    pattern?: string
    blocks?: object,
    format?: (value: T) => string,
    parse?: (value: string) => T,
    min?: T,
    max?: T,
    lazy?: boolean,
    onAccept?: (value: string) => void
    maskRef?: (mask: IMaskInput) => void
}

export type BaseInputProps<T> = {
    maskOptions?: MaskOptions<T>,
    validate?: (value: string) => void
    type: BaseInputType,
    size: BaseInputSize,
    onInput?: (value: string) => void,
    onFocus?: (focus : boolean) => void,
    onChange?: (e : ChangeEvent<HTMLInputElement>) => void,
    defaultValue?: string,
    placeholder?: string,
    refsNativeInput?: (element : HTMLInputElement) => void
}

type BaseInputState = {

}

export class BaseInput<T> extends React.Component<BaseInputProps<T>, BaseInputState> {

    constructor(props : BaseInputProps<T>) {
        super(props);

        this.onFocus = this.onFocus.bind(this);
        this.onInput = this.onInput.bind(this);
        this.onBlur = this.onBlur.bind(this);
    }

    onFocus(e : React.FocusEvent<HTMLInputElement>) {
        const props = this.props;
        if (props.onFocus) {
            props.onFocus(true);
        }
    }

    onBlur(e : React.FocusEvent<HTMLInputElement>) {
        const props = this.props;
        if (props.onFocus) {
            props.onFocus(false);
        }
        if (props.validate && e.target.value.length > 0) {
            props.validate(e.target.value);
        }
    }

    onInput(e : React.ChangeEvent<HTMLInputElement>) {
        const props = this.props;
        const value = e.target.value;
        if (props.onInput) {
            props.onInput(value);
        }
    }

    render() {
        const props = this.props;

        const classname = classnames({
            'text-input': true,
            // '__digits': this.props.type === InputTextType.DIGITS,
            '__xs': props.size === BaseInputSize.XS,
            '__s': props.size === BaseInputSize.S,
            '__m': props.size === BaseInputSize.M,
        });

        let placeholder;
        if (typeof props.placeholder === 'string') {
            placeholder = props.placeholder;
        } else {
            placeholder = null;
        }

        let inputType = null;
        switch (props.type) {
            case BaseInputType.NUMBER:
                inputType = 'number';
                break;
            case BaseInputType.DATE:
                inputType = 'date';
                break;
            case BaseInputType.TIME:
                inputType = 'time';
                break;
            case BaseInputType.EMAIL:
                inputType = 'email';
                break;
            case BaseInputType.PASSWORD:
                inputType = 'password';
                break;
            case BaseInputType.TEXT:
                inputType = 'text';
                break;

        }

        let input;
        if (props.maskOptions) {
            let maskOptions = props.maskOptions;
            input = (
                <IMaskInput
                    inputRef={props.refsNativeInput}
                    ref={maskOptions.maskRef}
                    mask={maskOptions.mask}
                    pattern={maskOptions.pattern}
                    blocks={maskOptions.blocks}
                    format={maskOptions.format}
                    parse={maskOptions.parse}
                    min={maskOptions.min}
                    max={maskOptions.max}
                    lazy={maskOptions.lazy}
                    onComplete={maskOptions.onAccept}

                    className={"text-input__input"}
                    type={inputType}
                    value={props.defaultValue ? props.defaultValue : null}
                    placeholder={placeholder}
                    onInput={this.onInput}
                    onFocus={props.onFocus ? this.onFocus : null}
                    onBlur={props.onFocus ? this.onBlur : null}
                />
            )
        } else {
            input = (
                <input
                    className="text-input__input"
                    type={inputType}
                    ref={props.refsNativeInput}
                    onFocus={this.onFocus}
                    onBlur={this.onBlur}
                    onInput={this.onInput}
                    defaultValue={props.defaultValue ? props.defaultValue : null}
                    onChange={props.onChange ? props.onChange : null}
                    placeholder={placeholder}
                />
            )
        }

        return (
            <div className={classname}>
                {input}
            </div>
        )
    }
}
