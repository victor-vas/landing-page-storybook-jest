import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/renderTheme';
import { Navlinks } from '.';
import mock from './mock';
import { theme } from '../../styles/theme';

describe('<Navlinks />', () => {
  it('should render links', () => {
    renderTheme(<Navlinks links={mock} />);

    expect(screen.getAllByRole('link')).toHaveLength(mock.length);
  });

  it('should not render links', () => {
    renderTheme(<Navlinks />);

    expect(screen.queryAllByText(/links/i)).toHaveLength(0);
  });

  it('should render in column when width-max 768px', () => {
    renderTheme(<Navlinks links={mock} />);

    expect(screen.getByText(/link 10/i).parentElement).toHaveStyleRule(
      'flex-flow',
      'column wrap',
      {
        media: theme.media.lteMedium,
      },
    );
  });

  it('should match snapshot', () => {
    const { container } = renderTheme(<Navlinks links={mock} />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
