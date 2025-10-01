import Icon from "./app/components/Icon";
import MessagesScreen from "./app/screens/MessagesScreen";

import Screen from "./app/components/Screen";
import ListItem from "./app/components/ListItem";

export default function App() {
  return (
    <Screen>
      <ListItem
        title={"MyTitle"}
        ImageComponent={<Icon name={"email"} />}
      ></ListItem>
    </Screen>
  );
}
