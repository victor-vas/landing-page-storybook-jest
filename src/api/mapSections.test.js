import {
  mapImageGrid,
  mapSectionContent,
  mapSections,
  mapSectionTwoColumns,
  mapTextGrid,
} from './mapSections';

import pagesData from './data.json';

describe('map-sections', () => {
  it('should render predefined section if no data', () => {
    const data = mapSections();
    expect(data).toEqual([]);
  });

  it('should render sections with correct data', () => {
    const data = mapSections(pagesData[0].sections);
    expect(data[0].component).toBe('section.section-two-columns');
  });

  it('should test section with invalid data', () => {
    const withNoTextOrImageGrid = mapSections([
      { __component: 'section.section-grid' },
    ]);
    const WithNoComponent = mapSections([{}]);

    expect(withNoTextOrImageGrid).toEqual([
      { __component: 'section.section-grid' },
    ]);
    expect(WithNoComponent).toEqual([{}]);
  });

  it('should test section.section-grid with no text_grid or image_grid', () => {
    const withNoTextOrImageGrid = mapSections([
      { __component: 'section.section-grid', image_grid: [{}] },
      { __component: 'section.section-grid', text_grid: [{}] },
    ]);

    expect(withNoTextOrImageGrid.length).toBe(2);
  });

  it('should map section two columns if data is empty', () => {
    const data = mapSectionTwoColumns();

    expect(data.background).toBe(false);
    expect(data.component).toBe('');
    expect(data.sectionId).toBe('');
    expect(data.srcImg).toBe('');
    expect(data.text).toBe('');
    expect(data.title).toBe('');
  });

  it('should map section two columns with data', () => {
    const data = mapSectionTwoColumns({
      __component: 'section.section-two-columns',
      title: 'title',
      description: 'description',
      metadata: {
        background: true,
        section_id: 'contact',
      },
      image: {
        url: 'image.svg',
      },
    });

    expect(data.background).toBe(true);
    expect(data.component).toBe('section.section-two-columns');
    expect(data.sectionId).toBe('contact');
    expect(data.srcImg).toBe('image.svg');
    expect(data.text).toBe('description');
    expect(data.title).toBe('title');
  });

  it('should map section content with no data', () => {
    const data = mapSectionContent();

    expect(data.background).toBe(false);
    expect(data.component).toBe('');
    expect(data.sectionId).toBe('');
    expect(data.title).toBe('');
    expect(data.html).toBe('');
  });

  it('should map section content', () => {
    const data = mapSectionContent({
      __component: 'section.section-content',
      title: 'Pricing',
      content: 'content',
      metadata: {
        background: false,
        section_id: 'pricing',
      },
    });

    expect(data.background).toBe(false);
    expect(data.component).toBe('section.section-content');
    expect(data.sectionId).toBe('pricing');
    expect(data.title).toBe('Pricing');
    expect(data.html).toBe('content');
  });

  it('should map grid text without data', () => {
    const data = mapTextGrid(undefined);

    expect(data.background).toBe(false);
    expect(data.component).toBe('section.section-grid-text');
    expect(data.sectionId).toBe('');
    expect(data.title).toBe('');
    expect(data.description).toBe('');
  });

  it('should map grid text with data', () => {
    const data = mapTextGrid({
      __component: 'section.section-grid',
      description: 'description',
      title: 'My Grid',
      text_grid: [
        {
          title: 'Test 1',
          description: 'text grid description 1',
        },
        {
          title: 'Test 2',
          description: 'text grid description 2',
        },
      ],
      image_grid: [],
      metadata: {
        background: true,
        section_id: 'grid-one',
      },
    });

    expect(data.background).toBe(true);
    expect(data.component).toBe('section.section-grid-text');
    expect(data.sectionId).toBe('grid-one');
    expect(data.title).toBe('My Grid');
    expect(data.description).toBe('description');
    expect(data.grid[0].title).toBe('Test 1');
    expect(data.grid[0].description).toBe('text grid description 1');
  });

  it('should map grid image without data', () => {
    const data = mapImageGrid(undefined);

    expect(data.background).toBe(false);
    expect(data.component).toBe('section.section-grid-image');
    expect(data.sectionId).toBe('');
    expect(data.title).toBe('');
    expect(data.description).toBe('');
  });

  it('should map grid image with data', () => {
    const data = mapImageGrid({
      __component: 'section.section-grid',
      description: 'description',
      title: 'Gallery',
      text_grid: [],
      image_grid: [
        {
          image: {
            alternativeText: 'alternative text',
            url: 'image.svg',
          },
        },
      ],
      metadata: {
        background: false,
        name: 'gallery',
        section_id: 'gallery',
      },
    });

    expect(data.background).toBe(false);
    expect(data.component).toBe('section.section-grid-image');
    expect(data.sectionId).toBe('gallery');
    expect(data.title).toBe('Gallery');
    expect(data.description).toBe('description');
    expect(data.grid[0].srcImg).toBe('image.svg');
    expect(data.grid[0].altText).toBe('alternative text');
  });
});
