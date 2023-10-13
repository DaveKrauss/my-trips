import ItemList from "../ItemList";

export default function PackingList({
  packingList,
  onCheck,
  onEdit,
  onRemove,
}) {
  const checkedItems = packingList.filter((listItem) => listItem.checked);
  const uncheckedItems = packingList.filter((listItem) => !listItem.checked);

  return (
    <>
      {uncheckedItems.length ? (
        <section>
          <ItemList
            items={uncheckedItems}
            onCheck={onCheck}
            onEdit={onEdit}
            onRemove={onRemove}
          />
          {checkedItems.length === packingList.length ? (
            <p>Congratulations, you have checked everything!</p>
          ) : null}
        </section>
      ) : null}
      {checkedItems.length ? (
        <section>
          <h2>Done:</h2>
          <ItemList
            items={checkedItems}
            onCheck={onCheck}
            onEdit={onEdit}
            onRemove={onRemove}
          />
        </section>
      ) : null}
    </>
  );
}