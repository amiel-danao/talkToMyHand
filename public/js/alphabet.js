const gestureStrings = {
		'sign_a': 'A',
		'sign_b': 'B',
		'sign_c': 'C',
		'sign_d': 'D',
		'thumbs_up': '👍',
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
gesture_c.addDirection(fp.Finger.Thumb, fp.FingerDirection.DiagonalUpRight, 0.5);
gesture_c.addDirection(fp.Finger.Thumb, fp.FingerDirection.DiagonalUpLeft, 0.5);

gesture_c.addCurl(fp.Finger.Index, fp.FingerCurl.HalfCurl, 1.0);
gesture_c.addDirection(fp.Finger.Index, fp.FingerDirection.DiagonalUpRight, 0.5);
gesture_c.addDirection(fp.Finger.Index, fp.FingerDirection.DiagonalUpLeft, 0.5);
gesture_c.addCurl(fp.Finger.Middle, fp.FingerCurl.HalfCurl, 1.0);
gesture_c.addDirection(fp.Finger.Middle, fp.FingerDirection.DiagonalUpRight, 0.5);
gesture_c.addDirection(fp.Finger.Middle, fp.FingerDirection.DiagonalUpLeft, 0.5);
gesture_c.addCurl(fp.Finger.Ring, fp.FingerCurl.HalfCurl, 1.0);
gesture_c.addDirection(fp.Finger.Ring, fp.FingerDirection.DiagonalUpRight, 0.5);
gesture_c.addDirection(fp.Finger.Ring, fp.FingerDirection.DiagonalUpLeft, 0.5);
gesture_c.addCurl(fp.Finger.Pinky, fp.FingerCurl.HalfCurl, 1.0);
gesture_c.addDirection(fp.Finger.Pinky, fp.FingerDirection.DiagonalUpRight, 0.5);
gesture_c.addDirection(fp.Finger.Pinky, fp.FingerDirection.DiagonalUpLeft, 0.5);

/*** - D - ***/
const gesture_d = new fp.GestureDescription('sign_d');
gesture_d.addCurl(fp.Finger.Thumb, fp.FingerCurl.HalfCurl, 0.5);
gesture_d.addDirection(fp.Finger.Thumb, fp.FingerDirection.VerticalUp, 1);
gesture_d.addCurl(fp.Finger.Thumb, fp.FingerCurl.NoCurl, 0.5);
gesture_d.addDirection(fp.Finger.Thumb, fp.FingerDirection.DiagonalUpRight, 1);
gesture_d.addDirection(fp.Finger.Thumb, fp.FingerDirection.DiagonalUpRight, 1);

gesture_d.addCurl(fp.Finger.Index, fp.FingerCurl.NoCurl, 1.0);
gesture_d.addDirection(fp.Finger.Index, fp.FingerDirection.VerticalUp, 1.0);

gesture_d.addCurl(fp.Finger.Middle, fp.FingerCurl.FullCurl, 0.5);
gesture_d.addDirection(fp.Finger.Middle, fp.FingerDirection.VerticalUp, 1.0);
gesture_d.addCurl(fp.Finger.Middle, fp.FingerCurl.HalfCurl, 0.5);
gesture_d.addDirection(fp.Finger.Middle, fp.FingerDirection.DiagonalUpRight, 1.0);
gesture_d.addDirection(fp.Finger.Middle, fp.FingerDirection.DiagonalUpLeft, 1.0);

gesture_d.addCurl(fp.Finger.Ring, fp.FingerCurl.FullCurl, 1.0);
gesture_d.addDirection(fp.Finger.Ring, fp.FingerDirection.VerticalUp, 1);
gesture_d.addDirection(fp.Finger.Ring, fp.FingerDirection.DiagonalUpRight, 1);
gesture_d.addDirection(fp.Finger.Ring, fp.FingerDirection.DiagonalUpLeft, 1);

gesture_d.addCurl(fp.Finger.Pinky, fp.FingerCurl.FullCurl, 0.5);
gesture_d.addDirection(fp.Finger.Pinky, fp.FingerDirection.VerticalUp, 1.0);
gesture_d.addCurl(fp.Finger.Pinky, fp.FingerCurl.FullCurl, 0.5);
gesture_d.addDirection(fp.Finger.Pinky, fp.FingerDirection.DiagonalUpRight, 1.0);
gesture_d.addDirection(fp.Finger.Pinky, fp.FingerDirection.DiagonalUpLeft, 1.0);

// configure gesture estimator
// add "✌🏻" and "👍" as sample gestures	  
const knownGestures = [
	fp.Gestures.VictoryGesture,
	fp.Gestures.ThumbsUpGesture,
	gesture_a,
	gesture_b,
	gesture_c,
	gesture_d
];