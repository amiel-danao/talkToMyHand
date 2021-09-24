const gestureStrings = {
		'sign_a': 'A',
		'sign_b': 'B',
		'sign_c': 'C',
		'sign_d': 'D',
		'sign_e': 'E',
		'sign_i': 'I',
		'sign_l': 'L',
		'sign_o': 'O',
		'sign_u': 'U',
		'sign_v': 'V' 
    };
	
/*** - A - ***/
const gesture_a = new fp.GestureDescription('sign_a');
gesture_a.addCurl(fp.Finger.Thumb, fp.FingerCurl.NoCurl, 1.0);
gesture_a.addDirection(fp.Finger.Thumb, fp.FingerDirection.VerticalUp, 1);

gesture_a.addCurl(fp.Finger.Index, fp.FingerCurl.FullCurl, 1.0);
gesture_a.addDirection(fp.Finger.Index, fp.FingerDirection.VerticalUp, 1.0);
gesture_a.addCurl(fp.Finger.Middle, fp.FingerCurl.FullCurl, 1.0);
gesture_a.addDirection(fp.Finger.Middle, fp.FingerDirection.VerticalUp, 1.0);
gesture_a.addCurl(fp.Finger.Ring, fp.FingerCurl.FullCurl, 1.0);
gesture_a.addDirection(fp.Finger.Ring, fp.FingerDirection.VerticalUp, 1.0);
gesture_a.addCurl(fp.Finger.Pinky, fp.FingerCurl.FullCurl, 1.0);
gesture_a.addDirection(fp.Finger.Pinky, fp.FingerDirection.VerticalUp, 1.0);

/*** - B - ***/
const gesture_b = new fp.GestureDescription('sign_b');
gesture_b.addCurl(fp.Finger.Thumb, fp.FingerCurl.FullCurl, 1.0);
gesture_b.addDirection(fp.Finger.Thumb, fp.FingerDirection.VerticalDown, 0.5);
gesture_b.addDirection(fp.Finger.Thumb, fp.FingerDirection.VerticalUp, 0.5);

gesture_b.addCurl(fp.Finger.Index, fp.FingerCurl.NoCurl, 1.0);
gesture_b.addDirection(fp.Finger.Index, fp.FingerDirection.VerticalUp, 1.0);
gesture_b.addCurl(fp.Finger.Middle, fp.FingerCurl.NoCurl, 1.0);
gesture_b.addDirection(fp.Finger.Middle, fp.FingerDirection.VerticalUp, 1.0);
gesture_b.addCurl(fp.Finger.Ring, fp.FingerCurl.NoCurl, 1.0);
gesture_b.addDirection(fp.Finger.Ring, fp.FingerDirection.VerticalUp, 1.0);
gesture_b.addCurl(fp.Finger.Pinky, fp.FingerCurl.NoCurl, 1.0);
gesture_b.addDirection(fp.Finger.Pinky, fp.FingerDirection.VerticalUp, 1.0);

/*** - C - ***/
const gesture_c = new fp.GestureDescription('sign_c');
gesture_c.addCurl(fp.Finger.Thumb, fp.FingerCurl.NoCurl, 1.0);
gesture_c.addDirection(fp.Finger.Thumb, fp.FingerDirection.HorizontalRight, 1);
gesture_c.addDirection(fp.Finger.Thumb, fp.FingerDirection.HorizontalLeft, 1);

gesture_c.addCurl(fp.Finger.Index, fp.FingerCurl.NoCurl, 1.0);
gesture_c.addDirection(fp.Finger.Index, fp.FingerDirection.DiagonalUpRight, 1);
gesture_c.addDirection(fp.Finger.Index, fp.FingerDirection.DiagonalUpLeft, 1);
gesture_c.addCurl(fp.Finger.Middle, fp.FingerCurl.NoCurl, 1.0);
gesture_c.addDirection(fp.Finger.Middle, fp.FingerDirection.DiagonalUpRight, 1);
gesture_c.addDirection(fp.Finger.Middle, fp.FingerDirection.DiagonalUpLeft, 1);
gesture_c.addCurl(fp.Finger.Ring, fp.FingerCurl.HalfCurl, 1.0);
gesture_c.addDirection(fp.Finger.Ring, fp.FingerDirection.DiagonalUpRight, 1);
gesture_c.addDirection(fp.Finger.Ring, fp.FingerDirection.DiagonalUpLeft, 1);
gesture_c.addCurl(fp.Finger.Pinky, fp.FingerCurl.HalfCurl, 1.0);
gesture_c.addDirection(fp.Finger.Pinky, fp.FingerDirection.DiagonalUpRight, 1);
gesture_c.addDirection(fp.Finger.Pinky, fp.FingerDirection.DiagonalUpLeft, 1);

/*** - O - ***/
const gesture_o = new fp.GestureDescription('sign_o');
gesture_o.addCurl(fp.Finger.Thumb, fp.FingerCurl.NoCurl, 1.0);
gesture_o.addDirection(fp.Finger.Thumb, fp.FingerDirection.DiagonalUpRight, 1);
gesture_o.addDirection(fp.Finger.Thumb, fp.FingerDirection.DiagonalUpLeft, 1);

gesture_o.addCurl(fp.Finger.Index, fp.FingerCurl.HalfCurl, 1.0);
gesture_o.addDirection(fp.Finger.Index, fp.FingerDirection.DiagonalUpRight, 1);
gesture_o.addDirection(fp.Finger.Index, fp.FingerDirection.DiagonalUpLeft, 1);
gesture_o.addCurl(fp.Finger.Middle, fp.FingerCurl.HalfCurl, 1.0);
gesture_o.addDirection(fp.Finger.Middle, fp.FingerDirection.DiagonalUpRight, 1);
gesture_o.addDirection(fp.Finger.Middle, fp.FingerDirection.DiagonalUpLeft, 1);
gesture_o.addCurl(fp.Finger.Ring, fp.FingerCurl.HalfCurl, 1.0);
gesture_o.addDirection(fp.Finger.Ring, fp.FingerDirection.DiagonalUpRight, 1);
gesture_o.addDirection(fp.Finger.Ring, fp.FingerDirection.DiagonalUpLeft, 1);
gesture_o.addCurl(fp.Finger.Pinky, fp.FingerCurl.HalfCurl, 1.0);
gesture_o.addDirection(fp.Finger.Pinky, fp.FingerDirection.DiagonalUpRight, 1);
gesture_o.addDirection(fp.Finger.Pinky, fp.FingerDirection.DiagonalUpLeft, 1);

/*** - D - ***/
const gesture_d = new fp.GestureDescription('sign_d');
gesture_d.addCurl(fp.Finger.Thumb, fp.FingerCurl.HalfCurl, 1.0);
gesture_d.addDirection(fp.Finger.Thumb, fp.FingerDirection.DiagonalUpRight, 1.0);
gesture_d.addDirection(fp.Finger.Thumb, fp.FingerDirection.DiagonalUpLeft, 1.0);

gesture_d.addCurl(fp.Finger.Index, fp.FingerCurl.NoCurl, 1.0);
gesture_d.addDirection(fp.Finger.Index, fp.FingerDirection.VerticalUp, 1.0);
gesture_d.addDirection(fp.Finger.Index, fp.FingerDirection.VerticalUp, 1.0);
gesture_d.addCurl(fp.Finger.Middle, fp.FingerCurl.HalfCurl, 1.0);
gesture_d.addDirection(fp.Finger.Middle, fp.FingerDirection.DiagonalUpRight, 1.0);
gesture_d.addDirection(fp.Finger.Middle, fp.FingerDirection.DiagonalUpLeft, 1.0);
gesture_d.addCurl(fp.Finger.Ring, fp.FingerCurl.HalfCurl, 1.0);
gesture_d.addDirection(fp.Finger.Ring, fp.FingerDirection.DiagonalUpRight, 1.0);
gesture_d.addDirection(fp.Finger.Ring, fp.FingerDirection.DiagonalUpLeft, 1.0);
gesture_d.addCurl(fp.Finger.Pinky, fp.FingerCurl.HalfCurl, 1.0);
gesture_d.addDirection(fp.Finger.Pinky, fp.FingerDirection.DiagonalUpRight, 1.0);
gesture_d.addDirection(fp.Finger.Pinky, fp.FingerDirection.DiagonalUpLeft, 1.0);

/*** - E - ***/
const gesture_e = new fp.GestureDescription('sign_e');
gesture_e.addCurl(fp.Finger.Thumb, fp.FingerCurl.HalfCurl, 1.0);
gesture_e.addDirection(fp.Finger.Thumb, fp.FingerDirection.DiagonalUpLeft, 1.0);
gesture_e.addDirection(fp.Finger.Thumb, fp.FingerDirection.DiagonalUpRight, 1.0);

gesture_e.addCurl(fp.Finger.Index, fp.FingerCurl.FullCurl, 1.0);
gesture_e.addDirection(fp.Finger.Index, fp.FingerDirection.DiagonalUpLeft, 1.0);
gesture_e.addDirection(fp.Finger.Index, fp.FingerDirection.DiagonalUpRight, 1.0);
gesture_e.addCurl(fp.Finger.Middle, fp.FingerCurl.FullCurl, 1.0);
gesture_e.addDirection(fp.Finger.Middle, fp.FingerDirection.VerticalUp, 1.0);
gesture_e.addCurl(fp.Finger.Ring, fp.FingerCurl.FullCurl, 1.0);
gesture_e.addDirection(fp.Finger.Ring, fp.FingerDirection.VerticalUp, 1.0);
gesture_e.addCurl(fp.Finger.Pinky, fp.FingerCurl.NoCurl, 1.0);
gesture_e.addDirection(fp.Finger.Pinky, fp.FingerDirection.VerticalUp, 1.0);

/*** - I - ***/
const gesture_i = new fp.GestureDescription('sign_i');
gesture_i.addCurl(fp.Finger.Thumb, fp.FingerCurl.HalfCurl, 1.0);
gesture_i.addDirection(fp.Finger.Thumb, fp.FingerDirection.VerticalUp, 1.0);

gesture_i.addCurl(fp.Finger.Index, fp.FingerCurl.FullCurl, 1.0);
gesture_i.addDirection(fp.Finger.Index, fp.FingerDirection.VerticalUp, 1.0);
gesture_i.addCurl(fp.Finger.Middle, fp.FingerCurl.FullCurl, 1.0);
gesture_i.addDirection(fp.Finger.Middle, fp.FingerDirection.VerticalUp, 1.0);
gesture_i.addCurl(fp.Finger.Ring, fp.FingerCurl.FullCurl, 1.0);
gesture_i.addDirection(fp.Finger.Ring, fp.FingerDirection.VerticalUp, 1.0);
gesture_i.addCurl(fp.Finger.Pinky, fp.FingerCurl.NoCurl, 1.0);
gesture_i.addDirection(fp.Finger.Pinky, fp.FingerDirection.VerticalUp, 1.0);

/*** - U - ***/
const gesture_u = new fp.GestureDescription('sign_u');
gesture_u.addCurl(fp.Finger.Thumb, fp.FingerCurl.HalfCurl, 1.0);
gesture_u.addDirection(fp.Finger.Thumb, fp.FingerDirection.VerticalUp, 1.0);

gesture_u.addCurl(fp.Finger.Index, fp.FingerCurl.NoCurl, 1.0);
gesture_u.addDirection(fp.Finger.Index, fp.FingerDirection.VerticalUp, 1.0);
gesture_u.addCurl(fp.Finger.Middle, fp.FingerCurl.NoCurl, 1.0);
gesture_u.addDirection(fp.Finger.Middle, fp.FingerDirection.VerticalUp, 1.0);
gesture_u.addCurl(fp.Finger.Ring, fp.FingerCurl.FullCurl, 1.0);
gesture_u.addDirection(fp.Finger.Ring, fp.FingerDirection.VerticalUp, 1.0);
gesture_u.addCurl(fp.Finger.Pinky, fp.FingerCurl.FullCurl, 1.0);
gesture_u.addDirection(fp.Finger.Pinky, fp.FingerDirection.VerticalUp, 1.0);


/*** - L - ***/
const gesture_l = new fp.GestureDescription('sign_l');
gesture_l.addCurl(fp.Finger.Thumb, fp.FingerCurl.NoCurl, 1.0);
gesture_l.addDirection(fp.Finger.Thumb, fp.FingerDirection.DiagonalUpLeft, 1.0);
gesture_l.addDirection(fp.Finger.Thumb, fp.FingerDirection.DiagonalUpRight, 1.0);

gesture_l.addCurl(fp.Finger.Index, fp.FingerCurl.NoCurl, 1.0);
gesture_l.addDirection(fp.Finger.Index, fp.FingerDirection.VerticalUp, 1.0);
gesture_l.addCurl(fp.Finger.Middle, fp.FingerCurl.FullCurl, 1.0);
gesture_l.addDirection(fp.Finger.Middle, fp.FingerDirection.VerticalUp, 1.0);
gesture_l.addCurl(fp.Finger.Ring, fp.FingerCurl.FullCurl, 1.0);
gesture_l.addDirection(fp.Finger.Ring, fp.FingerDirection.VerticalUp, 1.0);
gesture_l.addCurl(fp.Finger.Pinky, fp.FingerCurl.FullCurl, 1.0);
gesture_l.addDirection(fp.Finger.Pinky, fp.FingerDirection.DiagonalUpLeft, 1.0);
gesture_l.addDirection(fp.Finger.Pinky, fp.FingerDirection.DiagonalUpRight, 1.0);



/*** - V - ***/
const gesture_v = new fp.GestureDescription('sign_v');
gesture_v.addCurl(fp.Finger.Thumb, fp.FingerCurl.HalfCurl, 1.0);
gesture_v.addDirection(fp.Finger.Thumb, fp.FingerDirection.VerticalUp, 1.0);

gesture_v.addCurl(fp.Finger.Index, fp.FingerCurl.NoCurl, 1.0);
gesture_v.addDirection(fp.Finger.Index, fp.FingerDirection.DiagonalUpLeft, 1.0);
gesture_v.addDirection(fp.Finger.Index, fp.FingerDirection.DiagonalUpRight, 1.0);
gesture_v.addCurl(fp.Finger.Middle, fp.FingerCurl.NoCurl, 1.0);
gesture_v.addDirection(fp.Finger.Middle, fp.FingerDirection.DiagonalUpLeft, 1.0);
gesture_v.addDirection(fp.Finger.Middle, fp.FingerDirection.DiagonalUpRight, 1.0);
gesture_v.addCurl(fp.Finger.Ring, fp.FingerCurl.FullCurl, 1.0);
gesture_v.addDirection(fp.Finger.Ring, fp.FingerDirection.VerticalUp, 1.0);
gesture_v.addCurl(fp.Finger.Pinky, fp.FingerCurl.FullCurl, 1.0);
gesture_v.addDirection(fp.Finger.Pinky, fp.FingerDirection.VerticalUp, 1.0);

// configure gesture estimator
// add "✌🏻" and "👍" as sample gestures	  
const knownGestures = [
	gesture_a,
	gesture_b,
	gesture_c,
	gesture_d,
	gesture_e,
	gesture_i,
	gesture_l,
	gesture_o,
	gesture_u,
	gesture_v
];