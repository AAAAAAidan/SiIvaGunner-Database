function search(input)
{
  if (input == "")
    return "Please enter a video title, URL, or ID.";
  else if (input.length == 11)
    var type = "videoId";
  else
    var type = "videoTitle";

  var status = "";
  var description = "";

  try
  {
    if (type == "videoTitle")
      var values = uploadsSheet.getRange(2, 1, 20).getValues();
    else
      var values = uploadsSheet.getRange(2, 3, 20).getValues();

    var row = values.findIndex(ids => {return ids[0] == input});
    if (row == -1)
    {
      if (type == "videoTitle")
        var values = uploadsSheet.getRange(21, 1, uploadsSheet.getLastRow() - 20).getValues();
      else
        var values = uploadsSheet.getRange(21, 3, uploadsSheet.getLastRow() - 20).getValues();

      var row = values.findIndex(ids => {return ids[0] == input});

      if (row == -1)
        return "Video not found.";
      else
        var data = uploadsSheet.getRange(row + 21, 1, 1, 7).getValues();
    } else
      var data = uploadsSheet.getRange(row + 2, 1, 1, 7).getValues();

    var videoTitle = data[0][0];
    var wikiStatus = data[0][1];
    var videoId = data[0][2];
    var uploadDate = data[0][3];
    var length = data[0][4];
    var description = data[0][5].replace(/NEWLINE/g, "\n");
    var videoStatus = data[0][6].toLowerCase();

    var wikiUrl = "https://siivagunner.fandom.com/wiki/" + format(videoTitle);
    var archiveUrl = "https://web.archive.org/web/*/https://www.youtube.com/watch?v=" + videoId;

    status += "Archive link: <a target=\"_blank\" href=\"" + archiveUrl + "\">Wayback Machine</a>";
    status += "<br/>Upload date: " + uploadDate;
    status += "<br/>Video length: " + length;
    status += "<br/>Video status: " + videoStatus;

    if (wikiStatus == "No")
      status += "<br/>Wiki status: <a target=\"_blank\" href=\"" + wikiUrl + "\">documented</a>";
    else
      status += "<br/>Wiki status: <a target=\"_blank\" href=\"" + wikiUrl + "\">undocumented</a>";

  } catch(e)
  {
    return e;
  }

  return [videoId, status, description].join("SEPARATOR");
}
