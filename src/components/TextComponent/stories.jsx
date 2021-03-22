import { TextComponent } from '.';

export default {
  title: 'TextComponent',
  component: TextComponent,
  args: {
    children: `
      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
      Veritatis, repudiandae sunt aut ipsa, incidunt, laudantium nulla
      voluptatum vitae odit temporibus sed sint a accusamus obcaecati
      reprehenderit adipisci esse. Cumque, nemo.
    `,
  },
  argTypes: {
    children: { type: 'string' },
  },
};

export const Template = (args) => {
  return (
    <div>
      <TextComponent {...args} />
    </div>
  );
};
