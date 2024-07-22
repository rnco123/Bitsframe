/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import React, { useCallback, useEffect, useState } from 'react';
import useClasses from '../use-classes';
import useScale, { withScale } from '../use-scale';
import useWarning from '../utils/use-warning';
import { useCheckbox } from './checkbox-context';
import CheckboxIcon from './checkbox.icon';
import { UIColorTypes } from '../themes/presets';

export interface CheckboxEventTarget {
  checked: boolean;
}
export interface CheckboxEvent {
  target: CheckboxEventTarget;
  stopPropagation: () => void;
  preventDefault: () => void;
  nativeEvent: React.ChangeEvent;
}

interface Props {
  checked?: boolean;
  disabled?: boolean;
  type?: UIColorTypes;
  initialChecked?: boolean;
  onChange?: (e: CheckboxEvent) => void;
  className?: string;
  value?: string;
}

type NativeAttrs = Omit<React.InputHTMLAttributes<any>, keyof Props>;
export type CheckboxProps = Props & NativeAttrs;

const CheckboxComponent: React.FC<CheckboxProps> = ({
  checked,
  initialChecked = false,
  disabled = false,
  onChange,
  className = '',
  children,
  type = 'default' as UIColorTypes,
  value = '',
  ...props
}: CheckboxProps) => {
  const { UNIT, SCALE, CLASS_NAMES } = useScale();
  const [selfChecked, setSelfChecked] = useState<boolean>(initialChecked);
  const { updateState, inGroup, disabledAll, values } = useCheckbox();
  const isDisabled = inGroup ? disabledAll || disabled : disabled;
  const classes = useClasses('checkbox', className, type ? 'color-' + type : null, CLASS_NAMES);
  useEffect(() => {
    if (inGroup) {
      const next = values.includes(value);
      if (next === selfChecked) return;
      setSelfChecked(next);
    }
  }, [inGroup, values.join(',')]);

  if (inGroup && checked) {
    useWarning('Remove props "checked" when [Checkbox] component is in the group.', 'Checkbox');
  }

  const changeHandle = useCallback(
    (ev: React.ChangeEvent) => {
      if (isDisabled) return;
      const selfEvent: CheckboxEvent = {
        target: {
          checked: !selfChecked,
        },
        stopPropagation: ev.stopPropagation,
        preventDefault: ev.preventDefault,
        nativeEvent: ev,
      };
      if (inGroup && updateState) {
        updateState && updateState(value, !selfChecked);
      }

      setSelfChecked(!selfChecked);
      onChange && onChange(selfEvent);
    },
    [updateState, onChange, isDisabled, selfChecked],
  );

  useEffect(() => {
    if (checked === undefined) return;
    setSelfChecked(checked);
  }, [checked]);

  return (
    <label className={classes}>
      <input type="checkbox" disabled={isDisabled} checked={selfChecked} onChange={changeHandle} {...props} />

      <div className={useClasses('checkbox-inner', { checked: selfChecked })}>
        <CheckboxIcon />
      </div>
      <span className="text">{children}</span>
      <style jsx>{`
        .checkbox {
          display: inline-flex;
          justify-content: center;
          align-items: center;
          cursor: ${isDisabled ? 'not-allowed' : 'pointer'};
          opacity: ${isDisabled ? 0.75 : 1};

          --checkbox-fill: var(--color-base);
          --checkbox-bg: var(--color-contrast);
          --checkbox-color: transparent;
        }

        .checkbox-inner {
          transition:
            border-color 0.2s ease,
            background 0.2s ease,
            box-shadow 0.2s ease;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          line-height: var(--checkbox-size);
          width: var(--checkbox-size);
          height: var(--checkbox-size);
          border: 1px solid var(--color-border);
          opacity: ${disabled ? 0.4 : 1};
          cursor: ${disabled ? 'not-allowed' : 'pointer'};
        }

        .checked {
          background: var(--color-base);
          --checkbox-color: var(--color-contrast);
        }

        .text {
          padding-left: calc(var(--checkbox-size) * 0.5);
          user-select: none;
          cursor: ${isDisabled ? 'not-allowed' : 'pointer'};
        }

        input {
          opacity: 0;
          outline: none;
          position: absolute;
          width: 0;
          height: 0;
          margin: 0;
          padding: 0;
          z-index: -1;
          font-size: 0;
          background-color: transparent;
        }

        ${SCALE.r(0.25, value => `border-radius: ${value};`, undefined, 'checkbox-inner')}
        ${SCALE.padding(0, value => `padding: ${value.top} ${value.right} ${value.bottom} ${value.left};`, undefined, 'checkbox')}
        ${SCALE.margin(0, value => `margin: ${value.top} ${value.right} ${value.bottom} ${value.left};`, undefined, 'checkbox')}
        ${SCALE.w(1, value => `--checkbox-size: ${value};`, undefined, 'checkbox')}
        ${SCALE.font(0.875, value => `font-size: ${value};`, undefined, 'text')}
        ${SCALE.lineHeight(0.875, value => `line-height: ${value};`, undefined, 'text')}

        ${UNIT('checkbox')}
      `}</style>
    </label>
  );
};

CheckboxComponent.displayName = 'HimalayaCheckbox';
const Checkbox = withScale(CheckboxComponent);
export default Checkbox;
