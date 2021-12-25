
import keyCode, { typeKeyCode } from '@/components/keyCode'

type key = {
  string: string,
  code: typeKeyCode, // event.keyCode
}
type row = key[];
type keyboard = row[];

export const keyboardValues: keyboard = [
  [
    {
      string: '`',
      code: keyCode.Tilde
    },
    {
      string: '1',
      code: keyCode.One
    },
    {
      string: '2',
      code: keyCode.Two
    },
    {
      string: '3',
      code: keyCode.Three
    },
    {
      string: '4',
      code: keyCode.Four
    },
    {
      string: '5',
      code: keyCode.Five
    },
    {
      string: '6',
      code: keyCode.Six
    },
    {
      string: '7',
      code: keyCode.Seven
    },
    {
      string: '8',
      code: keyCode.Eight
    },
    {
      string: '9',
      code: keyCode.Nine
    },
    {
      string: '0',
      code: keyCode.Zero
    },
    {
      string: '-',
      code: keyCode.Dash
    },
    {
      string: '=',
      code: keyCode.Equals
    },
    {
      string: 'Bksp',
      code: keyCode.Backspace
    }
  ],
  [
    {
      string: '  ⇥ Tab',
      code: keyCode.Tab
    },
    {
      string: 'Q',
      code: keyCode.Q
    },
    {
      string: 'W',
      code: keyCode.W
    },
    {
      string: 'E',
      code: keyCode.E
    },
    {
      string: 'R',
      code: keyCode.R
    },
    {
      string: 'T',
      code: keyCode.T
    },
    {
      string: 'Y',
      code: keyCode.Y
    },
    {
      string: 'U',
      code: keyCode.U
    },
    {
      string: 'I',
      code: keyCode.I
    },
    {
      string: 'O',
      code: keyCode.O
    },
    {
      string: '[',
      code: keyCode.OpenBracket
    },
    {
      string: ']',
      code: keyCode.ClosedBracket
    },
    {
      string: '\\',
      code: keyCode.BackSlash
    }
  ],
  [
    {
      string: 'A',
      code: keyCode.A
    },
    {
      string: 'S',
      code: keyCode.S
    },
    {
      string: 'D',
      code: keyCode.D
    },
    {
      string: 'F',
      code: keyCode.F
    },
    {
      string: 'G',
      code: keyCode.G
    },
    {
      string: 'H',
      code: keyCode.H
    },
    {
      string: 'J',
      code: keyCode.J
    },
    {
      string: 'K',
      code: keyCode.K
    },
    {
      string: 'L',
      code: keyCode.L
    },
    {
      string: ';',
      code: keyCode.SemiColon
    },
    {
      string: '\'',
      code: keyCode.BackSlash
    },
    {
      string: 'Enter',
      code: keyCode.Enter
    }
  ],
  [
    {
      string: 'Shift',
      code: keyCode.Shift
    },
    {
      string: 'Z',
      code: keyCode.Z
    },
    {
      string: 'X',
      code: keyCode.D
    },
    {
      string: 'C',
      code: keyCode.F
    },
    {
      string: 'V',
      code: keyCode.G
    },
    {
      string: 'B',
      code: keyCode.H
    },
    {
      string: 'N',
      code: keyCode.J
    },
    {
      string: 'M',
      code: keyCode.K
    },
    {
      string: ',',
      code: keyCode.Comma
    },
    {
      string: '.',
      code: keyCode.Period
    },
    {
      string: '/',
      code: keyCode.ForwardSlash
    },
    {
      string: 'Shift',
      code: keyCode.Shift
    }
  ],
  [
    {
      string: '',
      code: keyCode.Space
    }
  ]
]
