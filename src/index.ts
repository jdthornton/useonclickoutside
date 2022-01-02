import useEventListener from '@jdthornton/useeventlistener';

type AnyEvent = MouseEvent | TouchEvent

export default function useOnClickOutside(
  ref: any,
  handler: (e: AnyEvent) => void,
  enabled: boolean = true
){

  const listener = (e: AnyEvent) => {
    if (ref.current && !ref.current.contains(e.target) && enabled) {
      handler(e)
    }
  }

  useEventListener(enabled ? "mousedown" : null,listener)
  useEventListener(enabled ? "touchstart" : null,listener)
}
