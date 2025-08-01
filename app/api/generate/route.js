import clientPromise from "@/lib/mongodb";

export async function POST(request) {
  const body = await request.json(); // ✅ await the body
  const client = await clientPromise;
  const db = client.db("SmallURL");
  const collection = db.collection("url");

 const doc = await collection.findOne({shorturl: body.shorturl})
  if(doc){
    return Response.json({
        success: false, error: true, message: "URL already exists"
    })
  }

  const result = await collection.insertOne({
    url: body.url,
    shorturl: body.shorturl,
  });

 


  return Response.json({
    success: true,
    error: false,
    message: "URL generated Successfully",
    insertedId: result.insertedId,
  });
}
