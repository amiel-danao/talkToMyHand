const gestureStrings = {
		'sign_a': 'A',
		'sign_b': 'B',
		'sign_c': 'C',
		'sign_d': 'D',
		'sign_e': 'E',
		'sign_f': 'F',
		'sign_g': 'G',
		'sign_h': 'H',
		'sign_i': 'I',

		'sign_k': 'K',
		'sign_l': 'L',
		'sign_m': 'M',

		'sign_o': 'O',
		'sign_p': 'P',
		'sign_q': 'Q',
		'sign_r': 'R',
		'sign_s': 'S',
		'sign_t': 'T',
		'sign_u': 'U',
		'sign_v': 'V',
		'sign_w': 'W',
		'sign_x': 'X',
		'sign_y': 'Y',
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



/*** - Y - ***/
const gesture_y = new fp.GestureDescription('sign_y');
gesture_y.addCurl(fp.Finger.Thumb, fp.FingerCurl.NoCurl, 1.0);
gesture_y.addDirection(fp.Finger.Thumb, fp.FingerDirection.HorizontalLeft, 0.25);
gesture_y.addDirection(fp.Finger.Thumb, fp.FingerDirection.HorizontalRight, 0.25);

gesture_y.addCurl(fp.Finger.Index, fp.FingerCurl.FullCurl, 1.0);
gesture_y.addDirection(fp.Finger.Index, fp.FingerDirection.VerticalUp, 1.0);
gesture_y.addCurl(fp.Finger.Middle, fp.FingerCurl.FullCurl, 1.0);
gesture_y.addDirection(fp.Finger.Middle, fp.FingerDirection.VerticalUp, 1.0);
gesture_y.addCurl(fp.Finger.Ring, fp.FingerCurl.FullCurl, 1.0);
gesture_y.addDirection(fp.Finger.Ring, fp.FingerDirection.VerticalUp, 1.0);
gesture_y.addCurl(fp.Finger.Pinky, fp.FingerCurl.NoCurl, 1.0);
gesture_y.addDirection(fp.Finger.Thumb, fp.FingerDirection.VerticalUp, 0.25);


/*** - F -***/
const gesture_f = new fp.GestureDescription('sign_f');
gesture_f.addCurl(fp.Finger.Thumb, fp.FingerCurl.FullCurl, 1.0);
gesture_f.addDirection(fp.Finger.Thumb, fp.FingerDirection.VerticalDown, 0.5);
gesture_f.addDirection(fp.Finger.Thumb, fp.FingerDirection.VerticalUp, 0.5);

gesture_f.addCurl(fp.Finger.Index, fp.FingerCurl.HalfCurl, 1.0);
gesture_f.addDirection(fp.Finger.Index, fp.FingerDirection.VerticalUp, 1.0);
gesture_f.addCurl(fp.Finger.Middle, fp.FingerCurl.NoCurl, 1.0);
gesture_f.addDirection(fp.Finger.Middle, fp.FingerDirection.VerticalUp, 1.0);
gesture_f.addCurl(fp.Finger.Ring, fp.FingerCurl.NoCurl, 1.0);
gesture_f.addDirection(fp.Finger.Ring, fp.FingerDirection.VerticalUp, 1.0);
gesture_f.addCurl(fp.Finger.Pinky, fp.FingerCurl.NoCurl, 1.0);
gesture_f.addDirection(fp.Finger.Pinky, fp.FingerDirection.VerticalUp, 1.0);


/*** - T -***/
const gesture_t = new fp.GestureDescription('sign_t');
gesture_t.addCurl(fp.Finger.Thumb, fp.FingerCurl.NoCurl, 1.0);
gesture_t.addDirection(fp.Finger.Thumb, fp.FingerDirection.DiagonalUpLeft, 0.5);
gesture_t.addDirection(fp.Finger.Thumb, fp.FingerDirection.VerticalUp, 0.5);

gesture_t.addCurl(fp.Finger.Index, fp.FingerCurl.FullCurl, 1.0);
gesture_t.addDirection(fp.Finger.Index, fp.FingerDirection.DiagonalUpLeft, 1.0);
gesture_t.addDirection(fp.Finger.Index, fp.FingerDirection.DiagonalUpRight, 1.0);
gesture_t.addCurl(fp.Finger.Middle, fp.FingerCurl.FullCurl, 1.0);
gesture_t.addDirection(fp.Finger.Middle, fp.FingerDirection.VerticalUp, 1.0);
gesture_t.addCurl(fp.Finger.Ring, fp.FingerCurl.FullCurl, 1.0);
gesture_t.addDirection(fp.Finger.Ring, fp.FingerDirection.DiagonalUpLeft, 1.0);
gesture_t.addDirection(fp.Finger.Ring, fp.FingerDirection.DiagonalDownnRight, 1.0);
gesture_t.addCurl(fp.Finger.Pinky, fp.FingerCurl.FullCurl, 1.0);
gesture_t.addDirection(fp.Finger.Pinky, fp.FingerDirection.DiagonalUpLeft, 1.0);
gesture_t.addDirection(fp.Finger.Pinky, fp.FingerDirection.DiagonalDownnRight, 1.0);



/*** - W -***/
const gesture_w = new fp.GestureDescription('sign_w');
gesture_w.addCurl(fp.Finger.Thumb, fp.FingerCurl.HalfCurl, 1.0);
gesture_w.addDirection(fp.Finger.Thumb, fp.FingerDirection.DiagonalUpRight, 1.0);

gesture_w.addCurl(fp.Finger.Index, fp.FingerCurl.NoCurl, 1.0);
gesture_w.addDirection(fp.Finger.Index, fp.FingerDirection.VerticalUp, 1.0);
gesture_w.addCurl(fp.Finger.Middle, fp.FingerCurl.NoCurl, 1.0);
gesture_w.addDirection(fp.Finger.Middle, fp.FingerDirection.VerticalUp, 1.0);
gesture_w.addCurl(fp.Finger.Middle, fp.FingerCurl.NoCurl, 1.0);
gesture_w.addDirection(fp.Finger.Middle, fp.FingerDirection.DiagonalUpRight, 1.0);
gesture_w.addCurl(fp.Finger.Pinky, fp.FingerCurl.FullCurl, 1.0);
gesture_w.addDirection(fp.Finger.Pinky, fp.FingerDirection.DiagonalUpRight, 1.0);


/*** - X -***/
const gesture_x = new fp.GestureDescription('sign_x');
gesture_x.addCurl(fp.Finger.Index, fp.FingerCurl.HalfCurl, 1.0);
gesture_x.addDirection(fp.Finger.Index, fp.FingerDirection.VerticalUp, 1.0);

gesture_x.addCurl(fp.Finger.Index, fp.FingerCurl.HalfCurl, 1.0);
gesture_x.addDirection(fp.Finger.Index, fp.FingerDirection.VerticalUp, 1.0);
gesture_x.addDirection(fp.Finger.Index, fp.FingerDirection.VerticalDown, 1.0)
gesture_x.addCurl(fp.Finger.Middle, fp.FingerCurl.FullCurl, 1.0);
gesture_x.addDirection(fp.Finger.Middle, fp.FingerDirection.DiagonalUpLeft, 1.0);
gesture_x.addDirection(fp.Finger.Middle, fp.FingerDirection.DiagonalUpRight,1.0);
gesture_x.addCurl(fp.Finger.Middle, fp.FingerCurl.FullCurl, 1.0);
gesture_x.addDirection(fp.Finger.Middle, fp.FingerDirection.VerticalUp, 1.0);
gesture_x.addCurl(fp.Finger.Pinky, fp.FingerCurl.FullCurl, 1.0);
gesture_x.addDirection(fp.Finger.Pinky, fp.FingerDirection.DiagonalUpRight, 1.0);



/*** - G - ***/
const gesture_g = new fp.GestureDescription('sign_g');

gesture_g.addCurl(fp.Finger.Thumb, fp.FingerCurl.NoCurl, 1.0);
gesture_g.addDirection(fp.Finger.Thumb, fp.FingerDirection.HorizontalLeft, 0.5);
gesture_g.addDirection(fp.Finger.Thumb, fp.FingerDirection.HorizontalRight, 0.5);

gesture_g.addCurl(fp.Finger.Index, fp.FingerCurl.NoCurl, 1.0);
gesture_g.addDirection(fp.Finger.Index, fp.FingerDirection.HorizontalRight, 1.0);
gesture_g.addDirection(fp.Finger.Index, fp.FingerDirection.HorizontalLeft, 0.5);
gesture_g.addCurl(fp.Finger.Middle, fp.FingerCurl.FullCurl, 1.0);
gesture_g.addCurl(fp.Finger.Ring, fp.FingerCurl.FullCurl, 1.0);
gesture_g.addCurl(fp.Finger.Pinky, fp.FingerCurl.FullCurl, 1.0);


/*** - K - ***/
const gesture_k = new fp.GestureDescription('sign_k');
gesture_k.addCurl(fp.Finger.Thumb, fp.FingerCurl.NoCurl, 1.0);
gesture_k.addDirection(fp.Finger.Thumb, fp.FingerDirection.DiagonalUpRight, 0.25);

gesture_k.addCurl(fp.Finger.Index, fp.FingerCurl.NoCurl, 1.0);
gesture_k.addDirection(fp.Finger.Index, fp.FingerDirection.DiagonalUpLeft, 1.0);
gesture_k.addCurl(fp.Finger.Middle, fp.FingerCurl.NoCurl, 1.0);
gesture_k.addDirection(fp.Finger.Middle, fp.FingerDirection.DiagonalUpRight, 1.0);
gesture_k.addCurl(fp.Finger.Ring, fp.FingerCurl.FullCurl, 1.0);
gesture_k.addCurl(fp.Finger.Pinky, fp.FingerCurl.FullCurl, 1.0);


/*** - M - ***/
const gesture_m = new fp.GestureDescription('sign_m');
gesture_m.addCurl(fp.Finger.Thumb, fp.FingerCurl.NoCurl, 1.0);
gesture_m.addCurl(fp.Finger.Thumb, fp.FingerCurl.FullCurl, 1.0);
gesture_m.addDirection(fp.Finger.Thumb, fp.FingerDirection.HorizontalRight, 1.0);
gesture_m.addDirection(fp.Finger.Thumb, fp.FingerDirection.DiagonalUpRight, 1.0);

gesture_m.addCurl(fp.Finger.Index, fp.FingerCurl.FullCurl, 1.0);
gesture_m.addDirection(fp.Finger.Index, fp.FingerDirection.VerticalDown, 1.0);
gesture_m.addDirection(fp.Finger.Index, fp.FingerDirection.DiagonalDownRight, 1.0);
gesture_m.addCurl(fp.Finger.Middle, fp.FingerCurl.FullCurl, 1.0);
gesture_m.addCurl(fp.Finger.Ring, fp.FingerCurl.FullCurl, 1.0);
gesture_m.addCurl(fp.Finger.Pinky, fp.FingerCurl.FullCurl, 1.0);


/*** - H - ***/
const gesture_h = new fp.GestureDescription('sign_h');
gesture_h.addCurl(fp.Finger.Thumb, fp.FingerCurl.FullCurl, 1.0);
gesture_h.addDirection(fp.Finger.Thumb, fp.FingerDirection.DiagonalDownLeft, 1.0);

gesture_h.addCurl(fp.Finger.Index, fp.FingerCurl.NoCurl, 1.0);
gesture_h.addDirection(fp.Finger.Index, fp.FingerDirection.HorizontalRight, 1.0);
gesture_h.addDirection(fp.Finger.Index, fp.FingerDirection.DiagonalUpRight, 1.0);
gesture_h.addCurl(fp.Finger.Middle, fp.FingerCurl.NoCurl, 1.0);
gesture_h.addDirection(fp.Finger.Middle, fp.FingerDirection.HorizontalRight, 1.0);
gesture_h.addDirection(fp.Finger.Middle, fp.FingerDirection.DiagonalUpRight, 1.0);
gesture_h.addCurl(fp.Finger.Ring, fp.FingerCurl.FullCurl, 1.0);
gesture_h.addCurl(fp.Finger.Pinky, fp.FingerCurl.FullCurl, 1.0);


/*** - Q - ***/
const gesture_q = new fp.GestureDescription('sign_q');
gesture_q.addCurl(fp.Finger.Thumb, fp.FingerCurl.NoCurl, 1.0);
gesture_q.addDirection(fp.Finger.Thumb, fp.FingerDirection.DiagonalDownRight, 0.25);
gesture_q.addDirection(fp.Finger.Pinky, fp.FingerDirection.VerticalDown, 1.0);

gesture_q.addCurl(fp.Finger.Index, fp.FingerCurl.NoCurl, 1.0);
gesture_q.addDirection(fp.Finger.Index, fp.FingerDirection.VerticalDown, 1.0);
gesture_q.addDirection(fp.Finger.Index, fp.FingerDirection.DiagonalDownRight, 1.0);
gesture_q.addCurl(fp.Finger.Middle, fp.FingerCurl.FullCurl, 1.0);
gesture_q.addCurl(fp.Finger.Ring, fp.FingerCurl.FullCurl, 1.0);
gesture_q.addCurl(fp.Finger.Pinky, fp.FingerCurl.FullCurl, 1.0);


/*** - S - ***/
const gesture_s = new fp.GestureDescription('sign_s');
gesture_s.addCurl(fp.Finger.Thumb, fp.FingerCurl.HalfCurl, 1.0);
gesture_s.addDirection(fp.Finger.Thumb, fp.FingerDirection.VerticalUp, 1.0);

gesture_s.addCurl(fp.Finger.Index, fp.FingerCurl.FullCurl, 1.0);
gesture_s.addCurl(fp.Finger.Middle, fp.FingerCurl.FullCurl, 1.0);
gesture_s.addCurl(fp.Finger.Ring, fp.FingerCurl.FullCurl, 1.0);
gesture_s.addCurl(fp.Finger.Pinky, fp.FingerCurl.FullCurl, 1.0);


/*** - R - ***/
const gesture_r = new fp.GestureDescription('sign_r');
gesture_r.addCurl(fp.Finger.Thumb, fp.FingerCurl.HalfCurl, 1.0);
gesture_r.addDirection(fp.Finger.Thumb, fp.FingerDirection.VerticalUp, 1.0);

gesture_r.addCurl(fp.Finger.Index, fp.FingerCurl.NoCurl, 1.0);
gesture_r.addDirection(fp.Finger.Index, fp.FingerDirection.DiagonalUpRight, 1.0);
gesture_r.addCurl(fp.Finger.Middle, fp.FingerCurl.NoCurl, 1.0);
gesture_r.addDirection(fp.Finger.Middle, fp.FingerDirection.VerticalUp, 1.0);
gesture_r.addCurl(fp.Finger.Ring, fp.FingerCurl.FullCurl, 1.0);
gesture_r.addCurl(fp.Finger.Pinky, fp.FingerCurl.FullCurl, 1.0);


/*** -P- ***/
const gesture_p = new fp.GestureDescription('sign_p');
gesture_p.addCurl(fp.Finger.Thumb, fp.FingerCurl.NoCurl, 1.0);
gesture_p.addDirection(fp.Finger.Pinky, fp.FingerDirection.VerticalDown, 1.0);

gesture_p.addCurl(fp.Finger.Index, fp.FingerCurl.NoCurl, 1.0);
gesture_p.addDirection(fp.Finger.Index, fp.FingerDirection.VerticalDown, 1.0);
gesture_p.addDirection(fp.Finger.Index, fp.FingerDirection.DiagonalDownRight, 1.0);
gesture_p.addCurl(fp.Finger.Middle, fp.FingerCurl.NoCurl, 1.0);
gesture_p.addDirection(fp.Finger.Middle, fp.FingerDirection.VerticalDown, 1.0);
gesture_p.addCurl(fp.Finger.Ring, fp.FingerCurl.FullCurl, 1.0);
gesture_p.addCurl(fp.Finger.Pinky, fp.FingerCurl.FullCurl, 1.0);

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
	gesture_v,
	gesture_y,
	gesture_f,
	gesture_t,
	gesture_w,
	gesture_x,
	gesture_g,
	gesture_k,
	gesture_m,
	gesture_h,
	gesture_q,
	gesture_s,
	gesture_r,
	gesture_p,


];
