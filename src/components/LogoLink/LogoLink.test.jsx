import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/renderTheme';
import { LogoLink } from '.';

describe('<LogoLink />', () => {
  it('should render text logo', () => {
    renderTheme(<LogoLink link="#target" text="test" />);

    expect(screen.getByRole('link', { name: 'test' })).toHaveAttribute(
      'href',
      '#target',
    );
  });

  it('should render image logo', () => {
    renderTheme(<LogoLink link="#target" text="test" srcImg="image.png" />);

    expect(screen.getByRole('img', { name: 'test' })).toHaveAttribute(
      'src',
      'image.png',
    );
  });

  it('should match snapshot', () => {
    const { container } = renderTheme(
      <LogoLink link="#target" text="test" srcImg="image.png" />,
    );

    expect(container).toMatchSnapshot();
  });
});
