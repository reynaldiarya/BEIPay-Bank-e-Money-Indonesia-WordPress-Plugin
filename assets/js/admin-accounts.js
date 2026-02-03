/**
 * Indobe Admin Account Management Script
 * Handles add/remove account functionality for payment gateway settings
 */
(function ($) {
  "use strict";

  /**
   * Initialize account table handlers
   * @param {string} gatewayId - The gateway ID (e.g., 'bank_bni', 'gopay')
   */
  function initAccountTable(gatewayId) {
    var $accountsTable = $("#" + gatewayId + "_accounts");

    if (!$accountsTable.length) {
      return;
    }

    // Add account row
    $accountsTable.on("click", "a.add", function (e) {
      e.preventDefault();

      var size = $accountsTable.find("tbody .account").length;
      var fieldPrefix = gatewayId;

      var newRow =
        '<tr class="account">' +
        '<td class="sort"></td>' +
        '<td><input type="text" name="' +
        fieldPrefix +
        "_account_name[" +
        size +
        ']" /></td>' +
        '<td><input type="text" name="' +
        fieldPrefix +
        "_account_number[" +
        size +
        ']" /></td>' +
        '<td><input type="text" name="' +
        fieldPrefix +
        "_sort_code[" +
        size +
        ']" /></td>' +
        '<td><input type="text" name="' +
        fieldPrefix +
        "_iban[" +
        size +
        ']" /></td>' +
        '<td><input type="text" name="' +
        fieldPrefix +
        "_bic[" +
        size +
        ']" /></td>' +
        "</tr>";

      $accountsTable.find("table tbody").append(newRow);
    });
  }

  // Initialize for all gateway account tables on page load
  $(document).ready(function () {
    // Find all account tables with IDs ending in '_accounts'
    $('[id$="_accounts"]').each(function () {
      var $table = $(this);
      var gatewayId = $table.attr("id").replace("_accounts", "");
      initAccountTable(gatewayId);
    });
  });
})(jQuery);
