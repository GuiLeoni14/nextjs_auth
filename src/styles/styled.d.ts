import 'styled-components';
import light from './theme/light';

type Theme = typeof light;
declare module 'styled-components' {
    // eslint-disable-next-line @typescript-eslint/no-empty-interface
    export interface DefaultTheme extends Theme {}
}
