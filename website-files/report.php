<!doctype html>
<html>
  <?php include("head.php"); ?>
  <body>
    <?php include("nav.html"); ?>
    <main>
      <div>
        <label>What page did you encounter a problem on?</label>
        <br/>
        <select id="page">
          <option value="database">Database Search</option>
          <option value="generator">Template Generator</option>
        </select>
      </div>
      <br/>
      <div>
        <label>What did you enter when the problem occurred?</label>
        <br/>
        <input type="text" id="id" placeholder="Enter title, URL, or ID" required/>
      </div>
      <br/>
      <div>
        <label>Optionally, please describe the problem you encountered.</label>
        <textarea id="desc" rows=10></textarea>
      </div>
      <button onclick="reportIssue()">Submit</button>
      <p id="loadStatus"></p>
    </main>
    <?php include("footer.html"); ?>
  </body>
</html>