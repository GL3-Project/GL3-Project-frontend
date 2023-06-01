import { ReactElement } from 'react';

export {};

declare global {
  /**
   * Now declare things that go in the global namespace,
   * or augment existing declarations in the global namespace.
   */
  interface RoutesType {
    name: string;
    layout: string;
    icon: Element | string | any;
    path: string;
    secondary?: boolean;
  }
}
