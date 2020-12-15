import { defineComponent } from "vue";
import HelloWorld from "./components/HelloWorld";
import { HelloWorld as HelloWorldCopy } from "./components/HelloWorld copy";

export default defineComponent({
  setup() {
    return () => (
      <div>
        {/* 遗留BUG：上面的没有类型提示 */}
        <HelloWorld user={{ age: 15, name: "cc" }} />
        <HelloWorldCopy user={{ age: 15, name: "cc" }} />
      </div>
    );
  }
});
