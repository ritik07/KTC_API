const pool = require("../../database");

exports.deleteRavana = async (data, callback) => {
  const iRavanaID = data.iRavanaID;

  let bIsValid = true;
  let sResponse = "Record Deleted Succesfully";
  let iResponseCode = 103;

  try {
    if (bIsValid) {
      console.log(`DELETE FROM supreme where id=${iRavanaID}`);
      const results = await pool.query(
        `DELETE FROM supreme where id=${iRavanaID}`
      );
    }
  } catch (err) {
    bIsValid = false;
    sResponse = err.toString();
    iResponseCode = -9999;
  }
  return callback(sResponse, iResponseCode);
};
