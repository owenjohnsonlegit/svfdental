# Office photo inventory

All 26 owner-supplied photographs were visually reviewed. Original files are preserved in images/. Portrait names follow supplied filenames; job titles are not inferred. Alternate images are optimized for future use but are not all displayed at once.

| Original                          | Classification | Visual description / alt text                                                                       | Placement                                         |
| --------------------------------- | -------------- | --------------------------------------------------------------------------------------------------- | ------------------------------------------------- |
| Amish chairs.jpg                  | Waiting area   | Wood-framed chairs and a brown sofa beside the waiting-room windows                                 | Office tour                                       |
| Arial Front close up.jpg          | Exterior       | Front of the South Valley Family Dental building and covered entrance                               | Homepage location                                 |
| Arial Front of building west.jpg  | Exterior       | Elevated view of the dental office, parking area, and surrounding neighborhood                      | Office tour                                       |
| Arial front building centered.jpg | Exterior       | Centered view of the dental office entrance from the parking area                                   | Contact hero                                      |
| BW xray.jpg                       | Equipment      | Wall-mounted dental X-ray arm beside a treatment-room window                                        | Services equipment gallery                        |
| Bethany.jpg                       | Portrait       | Bethany, in an owner-supplied staff portrait                                                        | About, pending roster confirmation                |
| Dental tray 2.jpg                 | Equipment      | Dental instruments arranged on a treatment tray                                                     | Services equipment gallery                        |
| Dental tray.jpg                   | Equipment      | Vertical view of a dental instrument tray and delivery unit                                         | Alternate; landscape version selected             |
| Massage Chair.jpg                 | Office detail  | Black massage chair in a room off the office hallway                                                | Office tour; no availability claims               |
| Opt 4 from door.jpg               | Treatment room | Dental chair, wood cabinetry, and windows viewed from a treatment-room doorway                      | Services hero                                     |
| Opt 4.jpg                         | Treatment room | Dental treatment room with a reclining chair, overhead light, and wood cabinets                     | Homepage and office tour                          |
| Paige.jpg                         | Portrait       | Paige, in an owner-supplied staff portrait                                                          | About, pending roster confirmation                |
| Pano 2.jpg                        | Equipment      | Panoramic dental imaging unit viewed through its room doorway                                       | Alternate; closer equipment view selected         |
| Pano.jpg                          | Equipment      | Panoramic dental imaging unit inside the office                                                     | Services equipment gallery                        |
| Reception back view.jpg           | Reception      | Reception workspace with wood cabinetry, white counters, and the adjacent hallway                   | Office tour                                       |
| Reception front view.jpg          | Reception      | Front reception counter with wood cabinetry and pendant lights                                      | Office Info hero and patient resources            |
| Richard.jpg                       | Portrait       | Richard S. Johnson, DDS, wearing dark dental scrubs                                                 | Homepage and About biography                      |
| SVFD East View Valley.jpg         | Local aerial   | Aerial view across Providence toward the snow-dusted Cache Valley mountains                         | About local roots                                 |
| SVFD SE view valley.jpg           | Local aerial   | Aerial neighborhood view with the South Valley Family Dental location labeled beneath the mountains | Contact location context                          |
| SVFD West Valley.jpg              | Local aerial   | Westward aerial view across Cache Valley with the dental office location labeled                    | Alternate; southeast view selected for directions |
| Staff photo.jpg                   | Group portrait | South Valley Family Dental group photographed outside the office entrance                           | Homepage team introduction and About              |
| Teresa.jpg                        | Portrait       | Teresa, in an owner-supplied staff portrait                                                         | About, pending roster confirmation                |
| Waiting room 2.jpg                | Waiting area   | Waiting-room chairs beneath a wall map, with reception visible beyond                               | Office tour                                       |
| Waiting room fireplace.jpg        | Waiting area   | Brown sofa and blue chairs arranged around the waiting-room fireplace                               | Homepage hero and office tour                     |
| Waiting room windows.jpg          | Waiting area   | Sunlit waiting area with a brown sofa, blue chairs, and plants beside a wall water feature          | Homepage office preview                           |
| Waiting room.jpg                  | Waiting area   | View from the waiting room toward the reception counter and wall map                                | Alternate; wider waiting-room view selected       |

## Delivery

Run npm run photos:prepare after replacing originals. WebP variants are generated at 400, 800, 1200, 1600, 2048px with no upscaling and without embedded EXIF/GPS metadata. Intrinsic dimensions, descriptive alt text, responsive sizes, and lazy loading are supplied by the shared PracticePhoto component. Only the above-the-fold lead photo is preloaded. The custom Next.js image loader serves generated static files directly, so photo delivery does not depend on a runtime image-optimization server.

Original library: 13.5 MB. One 1600px WebP per photo: 4.6 MB. Browsers request one appropriately sized variant per displayed photo, not the entire library.
