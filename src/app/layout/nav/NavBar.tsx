import { Button, Container, Menu, MenuItem } from "semantic-ui-react";

type Props = {
    setFormOpen: (value: boolean) => void
}

export default function NavBar({ setFormOpen }: Props) {
    return (
        <Menu inverted={true} fixed="top">
            <Container>
                <MenuItem header>
                    <img src="/logo.png" alt="logo" />
                    Re-vents
                </MenuItem>
                <MenuItem name="Events" />
                <MenuItem>
                    <Button content='Create Event' inverted={true} floated="right" positive={true}
                        onClick={() => setFormOpen(true)} />
                </MenuItem>
                <MenuItem position="right">
                    <Button content='Login' inverted={true} basic />
                    <Button content='Register' inverted={true} basic style={{ marginLeft: '0.5em' }} />
                </MenuItem>
            </Container>
        </Menu>
    )
}