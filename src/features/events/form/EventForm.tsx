import { Button, Form, Header, Segment } from "semantic-ui-react";

type Props = {
    setFormOpen: (value: boolean) => void
}

export default function EventForm({ setFormOpen }: Props) {
    return (
        <Segment clearing>
            <Header content='Create Event' />
            <Form>
                <Form.Field>
                    <input placeholder="Event title" type="text" />
                </Form.Field>
                <Form.Field>
                    <input placeholder="Category" type="text" />
                </Form.Field>
                <Form.Field>
                    <input placeholder="Description" type="text" />
                </Form.Field>
                <Form.Field>
                    <input placeholder="City" type="text" />
                </Form.Field>
                <Form.Field>
                    <input placeholder="Venue" type="text" />
                </Form.Field>
                <Form.Field>
                    <input placeholder="Date" type="text" />
                </Form.Field>
                <Button content='Submit' floated="right" positive type="submit" />
                <Button content='Cancel' floated="right" type="button" onClick={() => setFormOpen(false)} />
            </Form>
        </Segment>
    )
}