import { camelCase } from "lodash-es";
import { getStyle } from "../../helpers/typesciptCssModulesHelper";
import { ComponentDefaultTestId, getTestId } from "../../tests/test-ids-utils";
import cx from "classnames";
import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import VibeComponentProps from "../../types/VibeComponentProps";
import useEventListener from "../../hooks/useEventListener";
import useAfterFirstRender from "../../hooks/useAfterFirstRender";
import { NOOP } from "../../utils/function-utils";
import {
  CounterColor as CounterColorEnum,
  CounterSize as CounterSizeEnum,
  CounterType as CounterTypeEnum
} from "./CounterConstants";
import { CounterColor, CounterSize, CounterType } from "./Counter.types";
import { withStaticProps } from "../../types";
import styles from "./Counter.module.scss";

export interface CounterProps extends VibeComponentProps {
  /** id to pass to the element */
  id?: string;
  /** element id to describe the counter accordingly */
  ariaLabeledBy?: string;
  /** Custom class names to pass to the component wrapper */
  className?: string;
  /** Custom class names to pass to the component */
  counterClassName?: string;
  /** The numeric value of the counter */
  count?: number;
  /** Counter description */
  ariaLabel?: string;
  /** The size of the counter */
  size?: CounterSize;
  kind?: CounterType;
  /** The color of the counter */
  color?: CounterColor;
  /** maximum number of digits to display (see relevant story) */
  maxDigits?: number;
  /** Text prepended to counter value */
  prefix?: string;
  /** Callback to be called when the counter is clicked. */
  onMouseDown?: (event: React.MouseEvent<HTMLSpanElement>) => void;
  /** Disables the component's animation */
  noAnimation?: boolean;
}

const Counter: React.FC<CounterProps> & {
  sizes?: typeof CounterSizeEnum;
  colors?: typeof CounterColorEnum;
  kinds?: typeof CounterTypeEnum;
} = ({
  className,
  counterClassName,
  count = 0,
  size = "large",
  kind = "fill",
  color = "primary",
  maxDigits = 3,
  ariaLabeledBy = "",
  ariaLabel = "",
  id = "",
  prefix = "",
  onMouseDown = NOOP,
  noAnimation = false,
  "data-testid": dataTestId
}: CounterProps) => {
  const [countChangeAnimationState, setCountChangeAnimationState] = useState(false);

  const ref = useRef<HTMLDivElement>(null);

  const setCountChangedAnimationActive = useCallback(() => {
    setCountChangeAnimationState(true);
  }, [setCountChangeAnimationState]);

  const setCountChangedAnimationNotActive = useCallback(() => {
    setCountChangeAnimationState(false);
  }, [setCountChangeAnimationState]);

  useEventListener({
    eventName: "animationend",
    callback: setCountChangedAnimationNotActive,
    ref
  });

  const isAfterFirstRender = useAfterFirstRender();

  useEffect(() => {
    if (isAfterFirstRender.current) {
      setCountChangedAnimationActive();
    }
  }, [count, isAfterFirstRender, setCountChangedAnimationActive]);

  useEffect(() => {
    if (maxDigits <= 0) {
      console.error("Max digits must be a positive number");
    }
  }, [maxDigits]);

  const classNames = useMemo(() => {
    return cx(
      styles.counter,
      getStyle(styles, camelCase("size-" + size)),
      getStyle(styles, camelCase("kind-" + kind)),
      getStyle(styles, camelCase("color-" + color)),
      {
        [styles.withAnimation]: countChangeAnimationState
      },
      counterClassName
    );
  }, [size, kind, color, countChangeAnimationState, counterClassName]);

  const counterId = "counter" + (id ? `-${id}` : "");
  const countText = count?.toString().length > maxDigits ? `${10 ** maxDigits - 1}+` : String(count);
  const counter = (
    <span id={counterId} data-testid={dataTestId || getTestId(ComponentDefaultTestId.COUNTER, id)}>
      {prefix + countText}
    </span>
  );

  return (
    <span
      className={className}
      aria-label={`${ariaLabel} ${countText}`}
      aria-labelledby={ariaLabeledBy}
      onMouseDown={onMouseDown}
    >
      <div className={classNames} aria-label={countText} ref={ref}>
        {noAnimation ? (
          counter
        ) : (
          <SwitchTransition mode="out-in">
            <CSSTransition
              key={countText}
              classNames={{
                enter: styles.fadeEnter,
                enterActive: styles.fadeEnterActive,
                exit: styles.fadeExit,
                exitActive: styles.fadeExitActive
              }}
              // @ts-expect-error @definitelyTyped typings expecting a single parameter for some reason when the function passed here is called with two parameters
              // See https://github.com/reactjs/react-transition-group/blob/c89f807067b32eea6f68fd6c622190d88ced82e2/src/Transition.js#L522-L534
              addEndListener={(node: HTMLElement, done: () => void) => {
                node.addEventListener("transitionend", done, false);
              }}
            >
              <span id={counterId} data-testid={dataTestId || getTestId(ComponentDefaultTestId.COUNTER, id)}>
                {prefix + countText}
              </span>
            </CSSTransition>
          </SwitchTransition>
        )}
      </div>
    </span>
  );
};

export default withStaticProps(Counter, {
  sizes: CounterSizeEnum,
  colors: CounterColorEnum,
  kinds: CounterTypeEnum
});