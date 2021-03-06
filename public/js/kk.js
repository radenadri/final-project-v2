// Initialize Kartu Keluarga
function initKartuKeluarga() {

    // Hide filter section
    $('#filter-kk-card').hide()

    // Show Filter Kartu Keluarga Section
    $('#filter-kk').click(function(e) {

        $('#filter-kk-card').slideToggle()
        
        $('#filter-kk-tanggal-dari').datepicker({
            format: 'yyyy-mm-dd',
            autoclose: true
        })
        $('#filter-kk-tanggal-sampai').datepicker({
            format: 'yyyy-mm-dd',
            autoclose: true
        })
    })
}

// Clear error field on create form
function clearCreateField() 
{
    $('#create-no-kk').val('')
    $('#create-nik').val('')
    $('#create-nama').val('')
    $('#create-jenis-kelamin').val('')
    $('#create-alamat').val('')
    $('#create-rt').val('')
    $('#create-rw').val('')
    $('#create-kelurahan').val('')   
}

// Clear error field on create form
function clearErrorCreateField() 
{
    $('.create-kk-error-no-kk').html('')
    $('.create-kk-error-nik').html('')
    $('.create-kk-error-nama').html('')
    $('.create-kk-error-jenis-kelamin').html('')
    $('.create-kk-error-alamat').html('')
    $('.create-kk-error-rt').html('')
    $('.create-kk-error-rw').html('')
    $('.create-kk-error-kelurahan').html('')
    $('.create-kk-error-jumlah-pengikut').html('')   
}

// Clear error field on edit form
function clearErrorEditField() 
{
    $('.edit-kk-error-no-kk').html('')
    $('.edit-kk-error-nik').html('')
    $('.edit-kk-error-nama').html('')
    $('.edit-kk-error-jenis-kelamin').html('')
    $('.edit-kk-error-alamat').html('')
    $('.edit-kk-error-rt').html('')
    $('.edit-kk-error-rw').html('')
    $('.edit-kk-error-kelurahan').html('')
    $('.edit-kk-error-jumlah-pengikut').html('')   
}

// Fill error field on create field
function fillErrorCreateField(no_kk, nik, nama, jenis_kelamin, alamat, rt, rw, kelurahan, jumlah_pengikut) 
{
    $('.create-kk-error-no-kk').html(no_kk)
    $('.create-kk-error-nik').html(nik)
    $('.create-kk-error-nama').html(nama)
    $('.create-kk-error-jenis-kelamin').html(jenis_kelamin)
    $('.create-kk-error-alamat').html(alamat)
    $('.create-kk-error-rt').html(rt)
    $('.create-kk-error-rw').html(rw)
    $('.create-kk-error-kelurahan').html(kelurahan)
    $('.create-kk-error-jumlah-pengikut').html(jumlah_pengikut)   
}

// Fill error field on edit form
function fillErrorEditField(no_kk, nik, nama, jenis_kelamin, alamat, rt, rw, kelurahan, jumlah_pengikut) 
{
    $('.edit-kk-error-no-kk').html(no_kk)
    $('.edit-kk-error-nik').html(nik)
    $('.edit-kk-error-nama').html(nama)
    $('.edit-kk-error-jenis-kelamin').html(jenis_kelamin)
    $('.edit-kk-error-alamat').html(alamat)
    $('.edit-kk-error-rt').html(rt)
    $('.edit-kk-error-rw').html(rw)
    $('.edit-kk-error-kelurahan').html(kelurahan)
    $('.edit-kk-error-jumlah-pengikut').html(jumlah_pengikut)
}

// Fill Show Form
function fillShowForm(no_kk, nik, nama, jenis_kelamin, alamat, rt, rw, kelurahan, jumlah_pengikut) 
{
    $('#show-no-kk').val(no_kk)
    $('#show-nik').val(nik)
    $('#show-nama').val(nama)
    $('#show-jenis-kelamin').val(jenis_kelamin)
    $('#show-alamat').val(alamat)
    $('#show-rt').val(rt)
    $('#show-rw').val(rw)
    $('#show-kelurahan').val(kelurahan)
    $('#show-jumlah-pengikut').val(jumlah_pengikut)
}

// Fill Edit Form
function fillEditForm(id, no_kk, nik, nama, jenis_kelamin, alamat, rt, rw, kelurahan, jumlah_pengikut) 
{
    $('#kk-edit-id').val(id)
    $('#edit-no-kk').val(no_kk)
    $('#edit-nik').val(nik)
    $('#edit-nama').val(nama)
    $('#edit-jenis-kelamin').val(jenis_kelamin)
    $('#edit-alamat').val(alamat)
    $('#edit-rt').val(rt)
    $('#edit-rw').val(rw)
    $('#edit-kelurahan').val(kelurahan)
    $('#edit-jumlah-pengikut').val(jumlah_pengikut)
}

// Do Ajax Create
function doAjaxCreate(url, type, param) {
    $.ajax({
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        },
        url: url,
        type: type,
        data: param,
        success: function(data) {
            if (data.message == 'stored')
                $('#kk-create-modal').modal('hide')
            
            $('#kk-table').dataTable().fnStandingRedraw()
            clearCreateField()
        },
        error: function(jqXHR) {
            let message = JSON.parse(jqXHR.responseText)

            // If validating process fails, display the error messages
            let no_kk = message.errors.no_kk
            let nik = message.errors.nik
            let nama = message.errors.nama
            let jenis_kelamin = message.errors.jenis_kelamin
            let alamat = message.errors.alamat
            let rt = message.errors.rt
            let rw = message.errors.rw
            let kelurahan = message.errors.kelurahan
            let jumlah_pengikut = message.errors.jumlah_pengikut

            // Clear error field first
            clearErrorCreateField()
            
            // Show validating error messages
            fillErrorCreateField(no_kk, nik, nama, jenis_kelamin, alamat, rt, rw, kelurahan, jumlah_pengikut)
        }
    })
}

// Do Ajax Update
function doAjaxUpdate(url, type, param) {
    $.ajax({
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        },
        url: url,
        type: type,
        data: param,
        success: function(data) {
            if (data.message == 'updated') 
                $('#kk-edit-modal').modal('hide')
            
            $('#kk-table').dataTable().fnStandingRedraw()
        },
        error: function(jqXHR) {
            let message = JSON.parse(jqXHR.responseText)

            // If validating process fails, display the error messages
            let no_kk = message.errors.no_kk
            let nik = message.errors.nik
            let nama = message.errors.nama
            let jenis_kelamin = message.errors.jenis_kelamin
            let alamat = message.errors.alamat
            let rt = message.errors.rt
            let rw = message.errors.rw
            let kelurahan = message.errors.kelurahan
            let jumlah_pengikut = message.errors.jumlah_pengikut
            
            // Clear error field first
            clearErrorEditField()
            
            // Show validating error messages
            fillErrorEditField(no_kk, nik, nama, jenis_kelamin, alamat, rt, rw, kelurahan, jumlah_pengikut)
        }
    })
}

// Do Ajax Delete
function doAjaxDelete(url, type, param) {
    swal({
      title: 'Hapus data?',
      text: "Anda tidak akan bisa melakukan rollback!",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Hapus data!'
    })
    .then(function () {
        $.ajax({
            headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
            },
            url: url,
            type: type,
            data: param,
            success: function(data) {
                if(data.message == 'deleted')
                    swal('Terhapus!', 'Data terhapus!', 'success')
                
                $('#kk-table').dataTable().fnStandingRedraw()
            }
        })
    },
    function (dismiss) {
        if (dismiss === 'cancel')
            swal('Batal', 'Aksi dibatalkan!', 'error')
    })
}
// End of Function