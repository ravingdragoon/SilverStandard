Hooks.on('renderActorSheet5eCharacter', (sheet, html) => {
  html.find('.denomination.ep').remove();
  html.find('[name="data.currency.ep"]').remove();
});

Hooks.on('renderTidy5eSheet', (sheet, html) => {
    html.find('.denomination.ep').parent().remove();
    html.find('.denomination.ep').remove();
    html.find('[name="data.currency.ep"]').remove();
});
Hooks.on('renderTidy5eNPC', (sheet, html) => {
    html.find('.denomination.ep').parent().remove();
    html.find('.denomination.ep').remove();
    html.find('[name="data.currency.ep"]').remove();
});
Hooks.on('renderDNDBeyondCharacterSheet5e', (sheet, html) => {
    html.find('.denomination.ep').remove();
    html.find('[name="data.currency.ep"]').remove();
});
Hooks.on('renderAlt5eSheet', (sheet, html) => {
    html.find('.denomination.ep').remove();
    html.find('[name="data.currency.ep"]').remove();
});
Hooks.on('renderLootSheetNPC5e', (sheet, html) => {
    html.find('.denomination.ep').remove();
    html.find('[name="data.currency.ep"]').remove();
});
Hooks.on('renderMerchantSheetNPC', (sheet, html) => {
    html.find('.denomination.ep').remove();
    html.find('[name="data.currency.ep"]').remove();
});
Hooks.on('renderItemSheet5eWithBags', (sheet, html) => {
    html.find('.denomination.ep').remove();
    html.find('[name="data.currency.ep"]').remove();
    html.find('"Electrum"').remove();
});
