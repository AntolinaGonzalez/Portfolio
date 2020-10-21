import style from "../styles/Home.module.css";
import { Popover, OverlayTrigger, Button } from "react-bootstrap";

export default function Instructions() {
  const popover = (
    <Popover id="popover-basic">
      <Popover.Title as="h3">Case-Insensitive</Popover.Title>
      <Popover.Content>
        Uppercase and Lowercase letters are treated as same
      </Popover.Content>
    </Popover>
  );
  const Example = () => (
    <OverlayTrigger trigger="click" placement="right" overlay={popover}>
      <Button className={style.buttonStyle} variant="warning">
        ?
      </Button>
    </OverlayTrigger>
  );
  return (
    <div className={style.centerStyle}>
      <h3>Instructions:</h3>
      <h5>You can manage to terminal to get to know me</h5>
      <h5>if you wanna know what are enter 'ls' in the terminal</h5>
      <h5>cd 'option' to see the context</h5>
      <h5>cd .. to get back to the index</h5>
      <h5>p.e : cd Experience </h5>
      <h5>and you will be render to my experience page</h5>
      <h5>Try! its fun</h5>

      <h5>
        the commands are case-Insensitive <Example />
      </h5>
    </div>
  );
}
