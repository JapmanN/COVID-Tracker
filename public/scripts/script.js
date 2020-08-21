$('#StatsDropdown').change(function() {
    var currentSetting = $(this).find(":selected").text();

    if(currentSetting == "Worldwide") { $(".todayStats").addClass("d-none"); $(".globalStats").removeClass("d-none") }
    if(currentSetting == "Today") { $(".globalStats").addClass("d-none"); $(".todayStats").removeClass("d-none"); }
});