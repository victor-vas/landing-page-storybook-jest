import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/renderTheme';
import { Footer } from '.';

describe('<Footer />', () => {
  it('should render', () => {
    const { container } = renderTheme(<Footer html={'<h1>children</h1>'} />);
    expect(
      screen.getByRole('heading', { name: 'children' }),
    ).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});
