
import { KeyboardEvent } from 'react';

interface HandleKeyboardOptions {
    onEscape?: () => void;
    onEnter?: () => void;
}

export const handleKeyboard = (
    event: KeyboardEvent,
    options: HandleKeyboardOptions
) => {
    const { onEscape, onEnter } = options;

    switch (event.key) {
        case 'Escape':
            onEscape?.();
            break;
        case 'Enter':
            if (!event.shiftKey) { // shift + enter는 제외
                onEnter?.();
            }
            break;
        // 필요한 다른 키 핸들링도 추가 가능
    }
};

export const createKeyboardHandler = (options: HandleKeyboardOptions) => {
    return (event: KeyboardEvent) => handleKeyboard(event, options);
};