import { client } from "@/lib/db";

async function handler(req, res) {
  if (req.method === "GET") {
    if (req.query.conf === "uconf") {
      const [rows, fields] = await client.query(
        `SELECT e.id,
                e.slug,
                e.edition_title, 
                e.main_title, 
                e.start_date, 
                e.end_date, 
                e.city, 
                e.country,
                e.is_featured as event_featured, 
                i.event_image_path, 
                i.event_image_alt_text, 
                i.is_featured as image_featured
         FROM events_manage_editions as e
         LEFT JOIN event_images AS i ON e.short_name = i.edition_id
         WHERE e.is_featured = true AND e.start_date >= NOW()`
        // "SELECT * FROM events_manage_editions"
      );
      res.status(200).json(rows);
    }

    if (req.query.conf === "pconf") {
      const [rows, fields] = await client.query(
        `SELECT e.id,
                e.slug,
                e.edition_title, 
                e.main_title, 
                e.start_date, 
                e.end_date, 
                e.city, 
                e.country,
                e.is_featured as event_featured, 
                i.event_image_path, 
                i.event_image_alt_text, 
                i.is_featured as image_featured
         FROM events_manage_editions as e
         LEFT JOIN event_images AS i ON e.short_name = i.edition_id
         WHERE e.is_featured = true AND e.start_date <= NOW()`
        // "SELECT * FROM events_manage_editions"
      );
      res.status(200).json(rows);
    }
    
  }
}

export default handler;
