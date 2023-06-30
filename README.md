by @jonasree

This is a REACT web app for generating any DX-Code for analog film cameras to read out. This Code can be printed and then glued on the canister for telling the camera the ISO, Frame number and tolerance. This way you can get better image results (for example when shooting Kodak Portra 400 at ISO 200 instead of Boxspeed you get these pastel tones).

USAGE:

1. giving parameters in the address line (for example ?tolerance=1&iso=200&frames=36)
2. using the UI TextFields for entering the parameters

Parameters are:

ISO (iso=):
the ISO of the film or better: iso/2 for better quality (eg 400/2 = 200, 800/2 = 400, but ONLY FOR COLOR NEGATIVE FILM)

Frame  number (frames=):
How many Frames can be shot on the roll, most of the films have 36 frames

Tolerance (tolerance=):
The tolerance of the film when overexposing or underexposing (eg +0,5 to -0,5 is tolerance=1 and +1 to -1 is tolerance=2)

If you have questions or ideas pls text me per mail ego@jonas-reetz.de
