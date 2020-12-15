import { defineComponent, PropType } from "vue";

interface Person {
  name: string;
  age: number;
}

const proptypes = {
  user: {
    type: Object as PropType<Person>,
    required: true
  }
} as const;

export const HelloWorld = defineComponent({
  props: proptypes,
  setup(props) {
    return () => <div>{props.user.name}</div>;
  }
});
