import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/renderTheme';
import { GoTop } from '.';

describe('<GoTop />', () => {
  it('should render a go to top button', () => {
    const { container } = renderTheme(<GoTop />);

    const link = screen.getByRole('link', { name: 'Go to top' });

    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', '#');
    expect(container).toMatchSnapshot();
  });
});
