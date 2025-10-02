import React, { useState } from "react";

import AppTextInput from "./app/components/AppTextInput";
import Screen from "./app/components/Screen";
import AppPicker from "./app/components/AppPicker";

const categories = [
  { label: "Furniture", value: 1 },
  { label: "Clothing", value: 2 },
  { label: "Cameras", value: 3 },
];

export default function App() {
  const [category, setCategory] = useState();

  return (
    <Screen>
      <AppPicker
        selectedCategory={category}
        onSelectCategory={(item) => setCategory(item)}
        items={categories}
        icon={"apps"}
        placeholder="Category"
      />
      <AppTextInput icon={"email"} placeholder="Email" />
    </Screen>
  );
}
