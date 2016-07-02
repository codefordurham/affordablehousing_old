$(function() {
    toggleNav(1);}
)

function toggleNav(navId) {
    $('.graph').hide();
    $('#graph' + navId).show();
    $('.nav-item').css('font-weight', 'normal');
    $('#nav-item-' + navId).css('font-weight', 'bold');
}