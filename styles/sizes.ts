export default {
  down(size: string) {
    const sizes: { [key: string]: string } = {
      xs: '576px',
      sm: '700px',
      md: '950px',
      lg: '1200px',
    };
    return `@media (max-width: ${sizes[size]})`;
  },
  up(size: string) {
    const sizes: { [key: string]: string } = {
      xs: '576px',
      sm: '700px',
      md: '950px',
      lg: '1200px',
    };
    return `@media (min-width: ${sizes[size]})`;
  },
};
