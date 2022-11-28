import { Card } from "react-bootstrap";

export function Note({text, noteKey, date}) {
    return (
        <Card key={noteKey}>
            <Card.Subtitle>{date}</Card.Subtitle>
            <Card.Body>{text}</Card.Body>
        </Card>
    )
}