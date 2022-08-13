export default function handler(req, res) {
  // get the tokenId from the query params
  const tokenId = req.query.tokenId;
  // const { tokenId } = req.query;
  // As all the images are uploaded on github, we can extract the images from github directly
  const image_url =
    // "https://raw.githubusercontent.com/haoyanghy/Stikman/master/frontend/public/stikman/";
    "https://ipfs.filebase.io/ipfs/QmeKYkiVSPZ3rwB7G5QymkhChfR7p9Z1CcQpww182QWQE8";

  // The api is sending back metadata for a Stikman
  // To make our collection compatible with Opensea, we need to follow some Metadata standards when sending back the response from the api
  // More info can be found here: https://docs.opensea.io/docs/metadata-standards
  res.status(200).json({
    name: "Stikman #" + tokenId,
    description: "Stikman is a collection of interesting Stikman figures",
    image: image_url + tokenId + ".png",
  });
}
