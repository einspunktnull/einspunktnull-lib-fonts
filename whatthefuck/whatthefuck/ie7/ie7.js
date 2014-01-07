/* To avoid CSS expressions while still supporting IE 7 and IE 6, use this script */
/* The script tag referring to this file must be placed before the ending body tag. */

/* Use conditional comments in order to target IE 7 and older:
	<!--[if lt IE 8]><!-->
	<script src="ie7/ie7.js"></script>
	<!--<![endif]-->
*/

(function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'whatthefuck\'">' + entity + '</span>' + html;
	}
	var icons = {
		'icon-zzz': '&#x61;',
		'icon-typ': '&#x62;',
		'icon-phoneTeam': '&#x63;',
		'icon-phoneNormal': '&#x64;',
		'icon-phoneHappy': '&#x65;',
		'icon-muesli': '&#x66;',
		'icon-mrBusinessR': '&#x67;',
		'icon-mrBusinessL': '&#x68;',
		'icon-mrBusinessBoard2': '&#x69;',
		'icon-mrBusinessBoard1': '&#x6a;',
		'icon-mrBusiness': '&#x6b;',
		'icon-guentherEinspunktnull': '&#x6c;',
		'icon-guenther': '&#x6d;',
		'icon-catBoard2': '&#x6e;',
		'icon-catBoard1': '&#x6f;',
		'icon-cat': '&#x70;',
		'icon-androduino': '&#x71;',
		'0': 0
		},
		els = document.getElementsByTagName('*'),
		i, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		c = el.className;
		c = c.match(/icon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());
