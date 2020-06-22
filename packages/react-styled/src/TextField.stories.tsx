import React from "react";
import { TextField, TextFieldIcon } from './index';

export default {
  title: "TextField"
};

export const Filled = () => (
  <div>
    <h3>Without label</h3>
    <p>
      <TextField filled />
    </p>
    <h3>Just label</h3>
    <p>
      <TextField label="Hint text" filled />
    </p>
    <h3>Label shake</h3>
    <p>
      <TextField label="Hint text" filled labelShake />
    </p>
    <h3>Required</h3>
    <p>
      <TextField label="outlined text" filled required />
    </p>
    <h3>maxLength 10</h3>
    <p>
      <TextField label="Hint text" filled maxLength={10} />
    </p>
    <h3>prefix $</h3>
    <p>
      <TextField label="Hint text" filled prefixText="$" />
    </p>
    <h3>prefix $ endAligned</h3>
    <p>
      <TextField label="Hint text" filled prefixText="$" endAligned />
    </p>
    <h3>suffix .00</h3>
    <p>
      <TextField label="Hint text" filled suffixText=".00" />
    </p>
    <h3>suffix .00 endAligned</h3>
    <p>
      <TextField label="Hint text" filled suffixText=".00" endAligned />
    </p>
    <h3>leading icon</h3>
    <p>
      <TextField label="Hint text" filled icons={[<TextFieldIcon icon="event" leading />]} />
    </p>
    <h3>leading icon with label shake</h3>
    <p>
      <TextField label="Hint text" filled icons={[<TextFieldIcon icon="event" leading />]} labelShake />
    </p>
    <h3>leading icon endAligned</h3>
    <p>
      <TextField label="Hint text" filled icons={[<TextFieldIcon icon="event" leading />]} endAligned />
    </p>
    <h3>trailing icon</h3>
    <p>
      <TextField label="Hint text" filled icons={[<TextFieldIcon icon="event" trailing />]} />
    </p>
    <h3>trailing icon endAligned</h3>
    <p>
      <TextField label="Hint text" filled icons={[<TextFieldIcon icon="event" trailing />]} endAligned />
    </p>
    <h3>leading icon and trailing icon</h3>
    <p>
      <TextField label="Hint text" filled icons={[<TextFieldIcon icon="phone" leading />, <TextFieldIcon icon="event" trailing />]} />
    </p>
    <h3>leading icon and trailing icon endAligned</h3>
    <p>
      <TextField label="Hint text" filled icons={[<TextFieldIcon icon="phone" leading />, <TextFieldIcon icon="event" trailing />]} endAligned />
    </p>
    <h3>fullWidth and leading icon and trailing icon</h3>
    <p>
      <TextField label="Hint text" fullWidth filled icons={[<TextFieldIcon icon="phone" leading />, <TextFieldIcon icon="event" trailing />]} />
    </p>
    <h3>fullWidth and leading icon and trailing icon endAligned</h3>
    <p>
      <TextField label="Hint text" fullWidth filled icons={[<TextFieldIcon icon="phone" leading />, <TextFieldIcon icon="event" trailing />]} endAligned />
    </p>
    <h3>Helper text</h3>
    <p>
      <TextField label="outlined text" required filled helperText="Helper text" />
    </p>
    <h3>Invalid message</h3>
    <p>
      <TextField label="outlined text" required filled invalidMessage="Invalid, please update" />
    </p>
    <h3>Invalid message with Icon</h3>
    <p>
      <TextField label="outlined text" required filled invalidMessage="Invalid, please update"  icons={[<TextFieldIcon icon="error" trailing />]} />
    </p>
    <h3>Helper text with maxLength</h3>
    <p>
      <TextField label="outlined text" required filled helperText="Helper text" maxLength={10} />
    </p>
    <h3>Invalid message with maxLength</h3>
    <p>
      <TextField label="outlined text" required filled invalidMessage="Invalid, please update" maxLength={10} />
    </p>
    <h3>fullWidth and Invalid message with maxLength</h3>
    <p>
      <TextField label="outlined text" fullWidth required filled invalidMessage="Invalid, please update" maxLength={999} />
    </p>
  </div>
);


export const FilledDisabled = () => (
  <div>
    <h3>Without label</h3>
    <p>
      <TextField value="example" filled disabled />
    </p>
    <h3>Just label</h3>
    <p>
      <TextField label="Hint text" value="example" filled disabled />
    </p>
    <h3>Label shake</h3>
    <p>
      <TextField label="Hint text" value="example" filled disabled labelShake />
    </p>
    <h3>Required</h3>
    <p>
      <TextField label="outlined text" value="example" filled disabled required />
    </p>
    <h3>maxLength 10</h3>
    <p>
      <TextField label="Hint text" value="example" filled disabled maxLength={10} />
    </p>
    <h3>prefix $</h3>
    <p>
      <TextField label="Hint text" value="example" filled disabled prefixText="$" />
    </p>
    <h3>suffix .00</h3>
    <p>
      <TextField label="Hint text" value="example" filled disabled suffixText=".00" />
    </p>
    <h3>leading icon</h3>
    <p>
      <TextField label="Hint text" value="example" filled disabled icons={[<TextFieldIcon icon="event" leading />]} />
    </p>
    <h3>trailing icon</h3>
    <p>
      <TextField label="Hint text" value="example" filled disabled icons={[<TextFieldIcon icon="event" trailing />]} />
    </p>
    <h3>leading icon and trailing icon</h3>
    <p>
      <TextField label="Hint text" value="example" filled disabled icons={[<TextFieldIcon icon="phone" leading />, <TextFieldIcon icon="event" trailing />]} />
    </p>
    <h3>fullWidth and leading icon and trailing icon</h3>
    <p>
      <TextField label="Hint text" value="example" fullWidth filled disabled icons={[<TextFieldIcon icon="phone" leading />, <TextFieldIcon icon="event" trailing />]} />
    </p>
    <h3>Helper text</h3>
    <p>
      <TextField label="outlined text" required value="example" filled disabled helperText="Helper text" />
    </p>
    <h3>Invalid message</h3>
    <p>
      <TextField label="outlined text" required value="example" filled disabled invalidMessage="Invalid, please update" />
    </p>
    <h3>Helper text with maxLength</h3>
    <p>
      <TextField label="outlined text" required value="example" filled disabled helperText="Helper text" maxLength={10} />
    </p>
    <h3>Invalid message with maxLength</h3>
    <p>
      <TextField label="outlined text" required value="example" filled disabled invalidMessage="Invalid, please update" maxLength={10} />
    </p>
    <h3>fullWidth and Invalid message with maxLength</h3>
    <p>
      <TextField label="outlined text" fullWidth required value="example" filled disabled invalidMessage="Invalid, please update" maxLength={999} />
    </p>
  </div>
);


export const Outlined = () => (
  <div>
    <h3>Without label</h3>
    <p>
      <TextField outlined />
    </p>
    <h3>Just label</h3>
    <p>
      <TextField label="outlined text" outlined />
    </p>
    <h3>Label shake</h3>
    <p>
      <TextField label="outlined text" outlined labelShake />
    </p>
    <h3>Required</h3>
    <p>
      <TextField label="outlined text" outlined required />
    </p>
    <h3>maxLength 10</h3>
    <p>
      <TextField label="outlined text" outlined maxLength={10} />
    </p>
    <h3>prefix $</h3>
    <p>
      <TextField label="outlined text" outlined prefixText="$" />
    </p>
    <h3>prefix $ endAligned</h3>
    <p>
      <TextField label="outlined text" outlined prefixText="$" endAligned />
    </p>
    <h3>suffix .00</h3>
    <p>
      <TextField label="outlined text" outlined suffixText=".00" />
    </p>
    <h3>suffix .00 endAligned</h3>
    <p>
      <TextField label="outlined text" outlined suffixText=".00" endAligned />
    </p>
    <h3>leading icon</h3>
    <p>
      <TextField label="outlined text" outlined icons={[<TextFieldIcon icon="event" leading />]} />
    </p>
    <h3>leading icon with label shake</h3>
    <p>
      <TextField label="outlined text" outlined icons={[<TextFieldIcon icon="event" leading />]} labelShake />
    </p>
    <h3>leading icon endAligned</h3>
    <p>
      <TextField label="outlined text" outlined icons={[<TextFieldIcon icon="event" leading />]} endAligned />
    </p>
    <h3>trailing icon</h3>
    <p>
      <TextField label="outlined text" outlined icons={[<TextFieldIcon icon="event" trailing />]} />
    </p>
    <h3>trailing icon endAligned</h3>
    <p>
      <TextField label="outlined text" outlined icons={[<TextFieldIcon icon="event" trailing />]} endAligned />
    </p>
    <h3>leading icon and trailing icon</h3>
    <p>
      <TextField label="outlined text" outlined icons={[<TextFieldIcon icon="phone" leading />, <TextFieldIcon icon="event" trailing />]} />
    </p>
    <h3>leading icon and trailing icon endAligned</h3>
    <p>
      <TextField label="outlined text" outlined icons={[<TextFieldIcon icon="phone" leading />, <TextFieldIcon icon="event" trailing />]} endAligned />
    </p>
    <h3>fullWidth and leading icon and trailing icon</h3>
    <p>
      <TextField label="outlined text" fullWidth outlined icons={[<TextFieldIcon icon="phone" leading />, <TextFieldIcon icon="event" trailing />]} />
    </p>
    <h3>fullWidth and leading icon and trailing icon endAligned</h3>
    <p>
      <TextField label="outlined text" fullWidth outlined icons={[<TextFieldIcon icon="phone" leading />, <TextFieldIcon icon="event" trailing />]} endAligned />
    </p>
    <h3>Helper text</h3>
    <p>
      <TextField label="outlined text" outlined required helperText="Helper text" />
    </p>
    <h3>Invalid message</h3>
    <p>
      <TextField label="outlined text" outlined required invalidMessage="Invalid, please update" />
    </p>
    <h3>Helper text with maxLength</h3>
    <p>
      <TextField label="outlined text" required outlined helperText="Helper text" maxLength={10} />
    </p>
    <h3>Invalid message with maxLength</h3>
    <p>
      <TextField label="outlined text" required outlined invalidMessage="Invalid, please update" maxLength={10} />
    </p>
    <h3>fullWidth with Invalid message with maxLength</h3>
    <p>
      <TextField label="outlined text" fullWidth required outlined invalidMessage="Invalid, please update" maxLength={999} />
    </p>
  </div>
);

export const OutlinedDisabled = () => (
  <div>
    <h3>Without label</h3>
    <p>
      <TextField value="example" outlined disabled />
    </p>
    <h3>Just label</h3>
    <p>
      <TextField label="outlined text" value="example" outlined disabled />
    </p>
    <h3>Label shake</h3>
    <p>
      <TextField label="outlined text" value="example" outlined disabled labelShake />
    </p>
    <h3>Required</h3>
    <p>
      <TextField label="outlined text" value="example" outlined disabled required />
    </p>
    <h3>maxLength 10</h3>
    <p>
      <TextField label="outlined text" value="example" outlined disabled maxLength={10} />
    </p>
    <h3>prefix $</h3>
    <p>
      <TextField label="outlined text" value="example" outlined disabled prefixText="$" />
    </p>
    <h3>suffix .00</h3>
    <p>
      <TextField label="outlined text" value="example" outlined disabled suffixText=".00" />
    </p>
    <h3>leading icon</h3>
    <p>
      <TextField label="outlined text" value="example" outlined disabled icons={[<TextFieldIcon icon="event" leading />]} />
    </p>
    <h3>trailing icon</h3>
    <p>
      <TextField label="outlined text" value="example" outlined disabled icons={[<TextFieldIcon icon="event" trailing />]} />
    </p>
    <h3>leading icon and trailing icon</h3>
    <p>
      <TextField label="outlined text" value="example" outlined disabled icons={[<TextFieldIcon icon="phone" leading />, <TextFieldIcon icon="event" trailing />]} />
    </p>
    <h3>Fullwidth and leading icon and trailing icon</h3>
    <p>
      <TextField label="outlined text" value="example" fullWidth outlined disabled icons={[<TextFieldIcon icon="phone" leading />, <TextFieldIcon icon="event" trailing />]} />
    </p>
    <h3>Helper text</h3>
    <p>
      <TextField label="outlined text" value="example" outlined disabled required helperText="Helper text" />
    </p>
    <h3>Invalid message</h3>
    <p>
      <TextField label="outlined text" value="example" outlined disabled required invalidMessage="Invalid, please update" />
    </p>
    <h3>Helper text with maxLength</h3>
    <p>
      <TextField label="outlined text" required value="example" outlined disabled helperText="Helper text" maxLength={10} />
    </p>
    <h3>Invalid message with maxLength</h3>
    <p>
      <TextField label="outlined text" required value="example" outlined disabled invalidMessage="Invalid, please update" maxLength={10} />
    </p>
    <h3>Fullwidth and Invalid message with maxLength</h3>
    <p>
      <TextField label="outlined text" fullWidth required value="example" outlined disabled invalidMessage="Invalid, please update" maxLength={999} />
    </p>
  </div>
);




export const TextareaFilled = () => (
  <div>
    <h3>Without label</h3>
    <p>
      <TextField textarea filled />
    </p>
    <h3>Just label</h3>
    <p>
      <TextField textarea label="Hint text" filled />
    </p>
    <h3>Label shake</h3>
    <p>
      <TextField textarea label="Hint text" filled labelShake />
    </p>
    <h3>Required</h3>
    <p>
      <TextField textarea label="outlined text" filled required />
    </p>
    <h3>maxLength 10</h3>
    <p>
      <TextField textarea label="Hint text" filled maxLength={10} />
    </p>
    <h3>prefix $</h3>
    <p>
      <TextField textarea label="Hint text" filled prefixText="$" />
    </p>
    <h3>prefix $ endAligned</h3>
    <p>
      <TextField textarea label="Hint text" filled prefixText="$" endAligned />
    </p>
    <h3>suffix .00</h3>
    <p>
      <TextField textarea label="Hint text" filled suffixText=".00" />
    </p>
    <h3>suffix .00 endAligned</h3>
    <p>
      <TextField textarea label="Hint text" filled suffixText=".00" endAligned />
    </p>
    <h3>leading icon</h3>
    <p>
      <TextField textarea label="Hint text" filled icons={[<TextFieldIcon icon="event" leading />]} />
    </p>
    <h3>leading icon with label shake</h3>
    <p>
      <TextField textarea label="Hint text" filled icons={[<TextFieldIcon icon="event" leading />]} labelShake />
    </p>
    <h3>leading icon endAligned</h3>
    <p>
      <TextField textarea label="Hint text" filled icons={[<TextFieldIcon icon="event" leading />]} endAligned />
    </p>
    <h3>trailing icon</h3>
    <p>
      <TextField textarea label="Hint text" filled icons={[<TextFieldIcon icon="event" trailing />]} />
    </p>
    <h3>trailing icon endAligned</h3>
    <p>
      <TextField textarea label="Hint text" filled icons={[<TextFieldIcon icon="event" trailing />]} endAligned />
    </p>
    <h3>leading icon and trailing icon</h3>
    <p>
      <TextField textarea label="Hint text" filled icons={[<TextFieldIcon icon="phone" leading />, <TextFieldIcon icon="event" trailing />]} />
    </p>
    <h3>leading icon and trailing icon endAligned</h3>
    <p>
      <TextField textarea label="Hint text" filled icons={[<TextFieldIcon icon="phone" leading />, <TextFieldIcon icon="event" trailing />]} endAligned />
    </p>
    <h3>fullWidth and leading icon and trailing icon</h3>
    <p>
      <TextField textarea label="Hint text" fullWidth filled icons={[<TextFieldIcon icon="phone" leading />, <TextFieldIcon icon="event" trailing />]} />
    </p>
    <h3>fullWidth and leading icon and trailing icon endAligned</h3>
    <p>
      <TextField textarea label="Hint text" fullWidth filled icons={[<TextFieldIcon icon="phone" leading />, <TextFieldIcon icon="event" trailing />]} endAligned />
    </p>
    <h3>Helper text</h3>
    <p>
      <TextField textarea label="outlined text" required filled helperText="Helper text" />
    </p>
    <h3>Invalid message</h3>
    <p>
      <TextField textarea label="outlined text" required filled invalidMessage="Invalid, please update" />
    </p>
    <h3>Helper text with maxLength</h3>
    <p>
      <TextField textarea label="outlined text" required filled helperText="Helper text" maxLength={10} />
    </p>
    <h3>Invalid message with maxLength</h3>
    <p>
      <TextField textarea label="outlined text" required filled invalidMessage="Invalid, please update" maxLength={10} />
    </p>
    <h3>fullWidth and Invalid message with maxLength</h3>
    <p>
      <TextField textarea label="outlined text" fullWidth required filled invalidMessage="Invalid, please update" maxLength={999} />
    </p>
  </div>
);


export const TextareaFilledDisabled = () => (
  <div>
    <h3>Without label</h3>
    <p>
      <TextField textarea value="example" filled disabled />
    </p>
    <h3>Just label</h3>
    <p>
      <TextField textarea label="Hint text" value="example" filled disabled />
    </p>
    <h3>Label shake</h3>
    <p>
      <TextField textarea label="Hint text" value="example" filled disabled labelShake />
    </p>
    <h3>Required</h3>
    <p>
      <TextField textarea label="outlined text" value="example" filled disabled required />
    </p>
    <h3>maxLength 10</h3>
    <p>
      <TextField textarea label="Hint text" value="example" filled disabled maxLength={10} />
    </p>
    <h3>prefix $</h3>
    <p>
      <TextField textarea label="Hint text" value="example" filled disabled prefixText="$" />
    </p>
    <h3>suffix .00</h3>
    <p>
      <TextField textarea label="Hint text" value="example" filled disabled suffixText=".00" />
    </p>
    <h3>leading icon</h3>
    <p>
      <TextField textarea label="Hint text" value="example" filled disabled icons={[<TextFieldIcon icon="event" leading />]} />
    </p>
    <h3>trailing icon</h3>
    <p>
      <TextField textarea label="Hint text" value="example" filled disabled icons={[<TextFieldIcon icon="event" trailing />]} />
    </p>
    <h3>leading icon and trailing icon</h3>
    <p>
      <TextField textarea label="Hint text" value="example" filled disabled icons={[<TextFieldIcon icon="phone" leading />, <TextFieldIcon icon="event" trailing />]} />
    </p>
    <h3>fullWidth and leading icon and trailing icon</h3>
    <p>
      <TextField textarea label="Hint text" value="example" fullWidth filled disabled icons={[<TextFieldIcon icon="phone" leading />, <TextFieldIcon icon="event" trailing />]} />
    </p>
    <h3>Helper text</h3>
    <p>
      <TextField textarea label="outlined text" required value="example" filled disabled helperText="Helper text" />
    </p>
    <h3>Invalid message</h3>
    <p>
      <TextField textarea label="outlined text" required value="example" filled disabled invalidMessage="Invalid, please update" />
    </p>
    <h3>Helper text with maxLength</h3>
    <p>
      <TextField textarea label="outlined text" required value="example" filled disabled helperText="Helper text" maxLength={10} />
    </p>
    <h3>Invalid message with maxLength</h3>
    <p>
      <TextField textarea label="outlined text" required value="example" filled disabled invalidMessage="Invalid, please update" maxLength={10} />
    </p>
    <h3>fullWidth and Invalid message with maxLength</h3>
    <p>
      <TextField textarea label="outlined text" fullWidth required value="example" filled disabled invalidMessage="Invalid, please update" maxLength={999} />
    </p>
  </div>
);


export const TextareaOutlined = () => (
  <div>
    <h3>Without label</h3>
    <p>
      <TextField textarea outlined />
    </p>
    <h3>Just label</h3>
    <p>
      <TextField textarea label="outlined text" outlined />
    </p>
    <h3>Label shake</h3>
    <p>
      <TextField textarea label="outlined text" outlined labelShake />
    </p>
    <h3>Required</h3>
    <p>
      <TextField textarea label="outlined text" outlined required />
    </p>
    <h3>maxLength 10</h3>
    <p>
      <TextField textarea label="outlined text" outlined maxLength={10} />
    </p>
    <h3>prefix $</h3>
    <p>
      <TextField textarea label="outlined text" outlined prefixText="$" />
    </p>
    <h3>prefix $ endAligned</h3>
    <p>
      <TextField textarea label="outlined text" outlined prefixText="$" endAligned />
    </p>
    <h3>suffix .00</h3>
    <p>
      <TextField textarea label="outlined text" outlined suffixText=".00" />
    </p>
    <h3>suffix .00 endAligned</h3>
    <p>
      <TextField textarea label="outlined text" outlined suffixText=".00" endAligned />
    </p>
    <h3>leading icon</h3>
    <p>
      <TextField textarea label="outlined text" outlined icons={[<TextFieldIcon icon="event" leading />]} />
    </p>
    <h3>leading icon with label shake</h3>
    <p>
      <TextField textarea label="outlined text" outlined icons={[<TextFieldIcon icon="event" leading />]} labelShake />
    </p>
    <h3>leading icon endAligned</h3>
    <p>
      <TextField textarea label="outlined text" outlined icons={[<TextFieldIcon icon="event" leading />]} endAligned />
    </p>
    <h3>trailing icon</h3>
    <p>
      <TextField textarea label="outlined text" outlined icons={[<TextFieldIcon icon="event" trailing />]} />
    </p>
    <h3>trailing icon endAligned</h3>
    <p>
      <TextField textarea label="outlined text" outlined icons={[<TextFieldIcon icon="event" trailing />]} endAligned />
    </p>
    <h3>leading icon and trailing icon</h3>
    <p>
      <TextField textarea label="outlined text" outlined icons={[<TextFieldIcon icon="phone" leading />, <TextFieldIcon icon="event" trailing />]} />
    </p>
    <h3>leading icon and trailing icon endAligned</h3>
    <p>
      <TextField textarea label="outlined text" outlined icons={[<TextFieldIcon icon="phone" leading />, <TextFieldIcon icon="event" trailing />]} endAligned />
    </p>
    <h3>fullWidth and leading icon and trailing icon</h3>
    <p>
      <TextField textarea label="outlined text" fullWidth outlined icons={[<TextFieldIcon icon="phone" leading />, <TextFieldIcon icon="event" trailing />]} />
    </p>
    <h3>fullWidth and leading icon and trailing icon endAligned</h3>
    <p>
      <TextField textarea label="outlined text" fullWidth outlined icons={[<TextFieldIcon icon="phone" leading />, <TextFieldIcon icon="event" trailing />]} endAligned />
    </p>
    <h3>Helper text</h3>
    <p>
      <TextField textarea label="outlined text" outlined required helperText="Helper text" />
    </p>
    <h3>Invalid message</h3>
    <p>
      <TextField textarea label="outlined text" outlined required invalidMessage="Invalid, please update" />
    </p>
    <h3>Helper text with maxLength</h3>
    <p>
      <TextField textarea label="outlined text" required outlined helperText="Helper text" maxLength={10} />
    </p>
    <h3>Invalid message with maxLength</h3>
    <p>
      <TextField textarea label="outlined text" required outlined invalidMessage="Invalid, please update" maxLength={10} />
    </p>
    <h3>fullWidth with Invalid message with maxLength</h3>
    <p>
      <TextField textarea label="outlined text" fullWidth required outlined invalidMessage="Invalid, please update" maxLength={999} />
    </p>
  </div>
);

export const TextareaOutlinedDisabled = () => (
  <div>
    <h3>Without label</h3>
    <p>
      <TextField textarea value="example" outlined disabled />
    </p>
    <h3>Just label</h3>
    <p>
      <TextField textarea label="outlined text" value="example" outlined disabled />
    </p>
    <h3>Label shake</h3>
    <p>
      <TextField textarea label="outlined text" value="example" outlined disabled labelShake />
    </p>
    <h3>Required</h3>
    <p>
      <TextField textarea label="outlined text" value="example" outlined disabled required />
    </p>
    <h3>maxLength 10</h3>
    <p>
      <TextField textarea label="outlined text" value="example" outlined disabled maxLength={10} />
    </p>
    <h3>prefix $</h3>
    <p>
      <TextField textarea label="outlined text" value="example" outlined disabled prefixText="$" />
    </p>
    <h3>suffix .00</h3>
    <p>
      <TextField textarea label="outlined text" value="example" outlined disabled suffixText=".00" />
    </p>
    <h3>leading icon</h3>
    <p>
      <TextField textarea label="outlined text" value="example" outlined disabled icons={[<TextFieldIcon icon="event" leading />]} />
    </p>
    <h3>trailing icon</h3>
    <p>
      <TextField textarea label="outlined text" value="example" outlined disabled icons={[<TextFieldIcon icon="event" trailing />]} />
    </p>
    <h3>leading icon and trailing icon</h3>
    <p>
      <TextField textarea label="outlined text" value="example" outlined disabled icons={[<TextFieldIcon icon="phone" leading />, <TextFieldIcon icon="event" trailing />]} />
    </p>
    <h3>Fullwidth and leading icon and trailing icon</h3>
    <p>
      <TextField textarea label="outlined text" value="example" fullWidth outlined disabled icons={[<TextFieldIcon icon="phone" leading />, <TextFieldIcon icon="event" trailing />]} />
    </p>
    <h3>Helper text</h3>
    <p>
      <TextField textarea label="outlined text" value="example" outlined disabled required helperText="Helper text" />
    </p>
    <h3>Invalid message</h3>
    <p>
      <TextField textarea label="outlined text" value="example" outlined disabled required invalidMessage="Invalid, please update" />
    </p>
    <h3>Helper text with maxLength</h3>
    <p>
      <TextField textarea label="outlined text" required value="example" outlined disabled helperText="Helper text" maxLength={10} />
    </p>
    <h3>Invalid message with maxLength</h3>
    <p>
      <TextField textarea label="outlined text" required value="example" outlined disabled invalidMessage="Invalid, please update" maxLength={10} />
    </p>
    <h3>Fullwidth and Invalid message with maxLength</h3>
    <p>
      <TextField textarea label="outlined text" fullWidth required value="example" outlined disabled invalidMessage="Invalid, please update" maxLength={999} />
    </p>
  </div>
);



export const TextareaOtherProps = () => (
  <div>
    <h3>outlined 5 rows and 8 columns</h3>
    <p>
      <TextField textarea label="outlined text" value="example" outlined textareaRows={5} textareaCols={8} />
    </p>
    <h3>filled 5 rows and 8 columns</h3>
    <p>
      <TextField textarea label="outlined text" value="example" filled textareaRows={5} textareaCols={8} />
    </p>
    <h3>outlined maxLength 10 with counter in body</h3>
    <p>
      <TextField textarea textareaBodyCharacterCounter label="outlined text" value="example" outlined maxLength={999} />
    </p>
    <h3>filled maxLength 10 with counter in body</h3>
    <p>
      <TextField textarea textareaBodyCharacterCounter label="filled text" value="example" filled maxLength={999} />
    </p>
    <h3>outlined Helper text with maxLength with counter in body</h3>
    <p>
      <TextField textarea textareaBodyCharacterCounter label="outlined text" required value="example" outlined helperText="Helper text" maxLength={999} />
    </p>
    <h3>filled Helper text with maxLength with counter in body</h3>
    <p>
      <TextField textarea textareaBodyCharacterCounter label="filled text" required value="example" filled helperText="Helper text" maxLength={999} />
    </p>
  </div>
);