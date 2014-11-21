json.extract!(@card, :id, :list_id, :description, :ord, :created_at, :updated_at)

json.items @card.items do |item|
  json.extract!( item, :id, :title, :done, :created_at, :updated_at })
end