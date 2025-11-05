/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_3620903986")

  // add field
  collection.fields.addAt(2, new Field({
    "cascadeDelete": false,
    "collectionId": "pbc_1802620688",
    "hidden": false,
    "id": "relation112446027",
    "maxSelect": 1,
    "minSelect": 0,
    "name": "id_user",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_3620903986")

  // remove field
  collection.fields.removeById("relation112446027")

  return app.save(collection)
})
