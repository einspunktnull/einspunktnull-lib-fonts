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
		'icon-zzz': '&#x7a;',
		'icon-typ': '&#x74;',
		'icon-phoneHappy': '&#x70;',
		'icon-mugbot': '&#x6d;',
		'icon-phoneTeam': '&#x50;',
		'icon-phoneNormal': '&#x71;',
		'icon-muesli': '&#x4d;',
		'icon-mrBusinessBoard2': '&#x62;',
		'icon-mrBusinessBoard1': '&#x42;',
		'icon-mrBusiness': '&#x77;',
		'icon-guentherEinspunktnull': '&#x67;',
		'icon-guenther': '&#x47;',
		'icon-catBoard2': '&#x63;',
		'icon-catBoard1': '&#x43;',
		'icon-cat': '&#x65;',
		'icon-androduino': '&#x61;',
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
