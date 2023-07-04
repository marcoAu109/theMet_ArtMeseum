import useSWR from "swr";
import Error from "next/error";
import { Card, Button } from "react-bootstrap";

export default function ArtworkCardDetail({ objectID }) {
  const { data, error } = useSWR(
    `https://collectionapi.metmuseum.org/public/collection/v1/objects/${objectID}`
  );
  if (error) return <Error statusCode={404} />;
  if (data) {
    const {title, primaryImageSmall, objectDate, objectID, classification, medium, primaryImage, artistDisplayName, artistWikidata_URL, creditLine, dimensions} = data

    return (
      <>
        <Card>
          <Card.Img
            src={
              primaryImage
                ? primaryImage
                : "https://via.placeholder.com/375x375.png?text=[+Not+Available+]"
            }
          />
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>
              <strong>Date: </strong>
              {objectDate}
              <br />
              <strong>Classification: </strong>
              {classification}
              <br />
              <strong>Medium: </strong>
              {medium}
              <br />
              <br />
              <strong>Artist: </strong>
              {artistDisplayName ? (
                <>
                  {artistDisplayName}{" ( "}
                  <a href={artistWikidata_URL} target="_blank" rel="noreferrer">
                    wiki
                  </a>{" )"}
                </>
              ) : (
                "N/A"
              )}
              <br />
              <strong>Credit Line: </strong>
              {creditLine ? creditLine : "N>A"}
              <br />
              <strong>Dimension: </strong>
              {dimensions ? dimensions : "N/A"}
              <br />
            </Card.Text>
          </Card.Body>
        </Card>
      </>
    );
  } else return null;
}
