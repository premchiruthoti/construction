select e.id, e.slug, e.edition_title, e.main_title, e.start_date, e.end_date, e.city, e.country,e.is_featured as event_featured, i.event_image_path, i.event_image_alt_text, i.is_featured as image_featured
from events_manage_editions as e
left join event_images as i on e.short_name = i.edition_id
where e.is_featured = true and e.start_date >= now()