// Initialize KTP
function initKtp() {

    // Hide filter section
    $('#filter-ktp-card').hide()

    // Show Filter KTP Section
    $('#filter-ktp').click(function() {

        $('#filter-ktp-card').slideToggle()
        
        $('#filter-ktp-tanggal-lahir-dari').datepicker({
            format: 'yyyy-mm-dd',
            autoclose: true
        })
        $('#filter-ktp-tanggal-lahir-sampai').datepicker({
            format: 'yyyy-mm-dd',
            autoclose: true
        })
        $('#filter-ktp-tanggal-dari').datepicker({
            format: 'yyyy-mm-dd',
            autoclose: true
        })
        $('#filter-ktp-tanggal-sampai').datepicker({
            format: 'yyyy-mm-dd',
            autoclose: true
        })

    })

    // KTP create datepicker
    $('#create-tanggal-lahir').datepicker({
      format: 'yyyy-mm-dd',
      autoclose: true
    })
    $('#show-tanggal-lahir').datepicker({
      format: 'yyyy-mm-dd',
      autoclose: true
    })
    $('#edit-tanggal-lahir').datepicker({
      format: 'yyyy-mm-dd',
      autoclose: true
    })
}

// Clear error field on create form
function clearCreateField() 
{
    $('#create-no-kk').val('')
    $('#create-nik').val('')
    $('#create-nama').val('')
    $('#create-jenis-kelamin').val('')
    $('#create-tempat-lahir').val('')
    $('#create-tanggal-lahir').val('')
    $('#create-kewarganegaraan').val('')
    $('#create-golongan-darah').val('')

    $('#create-agama').val('')
    $('#create-status-perkawinan').val('')
    $('#create-pendidikan').val('')
    $('#create-pekerjaan').val('')
    $('#create-nama-ayah').val('')
    $('#create-nama-ibu').val('')

    $('#create-alamat').val('')
    $('#create-rt').val('')
    $('#create-rw').val('')
    $('#create-kelurahan').val('')
}

// Clear error field on create form
function clearErrorCreateField() 
{
    $('.create-ktp-error-no-kk').html('')
    $('.create-ktp-error-nik').html('')
    $('.create-ktp-error-nama').html('')
    $('.create-ktp-error-jenis-kelamin').html('')
    $('.create-ktp-error-tempat-lahir').html('')
    $('.create-ktp-error-tanggal-lahir').html('')
    $('.create-ktp-error-kewarganegaraan').html('')
    $('.create-ktp-error-golongan-darah').html('')

    $('.create-ktp-error-agama').html('')
    $('.create-ktp-error-status-perkawinan').html('')
    $('.create-ktp-error-pendidikan').html('')
    $('.create-ktp-error-pekerjaan').html('')
    $('.create-ktp-error-nama-ayah').html('')
    $('.create-ktp-error-nama-ibu').html('')

    $('.create-ktp-error-alamat').html('')
    $('.create-ktp-error-rt').html('')
    $('.create-ktp-error-rw').html('')
    $('.create-ktp-error-kelurahan').html('')
}

// Clear error field on edit form
function clearErrorEditField() 
{
    $('.edit-ktp-error-no-kk').html('')
    $('.edit-ktp-error-nik').html('')
    $('.edit-ktp-error-nama').html('')
    $('.edit-ktp-error-jenis-kelamin').html('')
    $('.edit-ktp-error-tempat-lahir').html('')
    $('.edit-ktp-error-tanggal-lahir').html('')
    $('.edit-ktp-error-kewarganegaraan').html('')
    $('.edit-ktp-error-golongan-darah').html('')

    $('.edit-ktp-error-agama').html('')
    $('.edit-ktp-error-status-perkawinan').html('')
    $('.edit-ktp-error-pendidikan').html('')
    $('.edit-ktp-error-pekerjaan').html('')
    $('.edit-ktp-error-nama-ayah').html('')
    $('.edit-ktp-error-nama-ibu').html('')

    $('.edit-ktp-error-alamat').html('')
    $('.edit-ktp-error-rt').html('')
    $('.edit-ktp-error-rw').html('')
    $('.edit-ktp-error-kelurahan').html('')
}

// Fill error field on create field
function fillErrorCreateField(no_kk, nik, nama, jenis_kelamin, tempat_lahir, tanggal_lahir, kewarganegaraan, gol_darah, agama, status_perkawinan, pendidikan, pekerjaan, nama_ayah, nama_ibu, alamat, rt, rw, kelurahan) 
{
    $('.create-ktp-error-no-kk').html(no_kk)
    $('.create-ktp-error-nik').html(nik)
    $('.create-ktp-error-nama').html(nama)
    $('.create-ktp-error-jenis-kelamin').html(jenis_kelamin)
    $('.create-ktp-error-tempat-lahir').html(tempat_lahir)
    $('.create-ktp-error-tanggal-lahir').html(tanggal_lahir)
    $('.create-ktp-error-kewarganegaraan').html(kewarganegaraan)
    $('.create-ktp-error-golongan-darah').html(gol_darah)

    $('.create-ktp-error-agama').html(agama)
    $('.create-ktp-error-status-perkawinan').html(status_perkawinan)
    $('.create-ktp-error-pendidikan').html(pendidikan)
    $('.create-ktp-error-pekerjaan').html(pekerjaan)
    $('.create-ktp-error-nama-ayah').html(nama_ayah)
    $('.create-ktp-error-nama-ibu').html(nama_ibu)

    $('.create-ktp-error-alamat').html(alamat)
    $('.create-ktp-error-rt').html(rt)
    $('.create-ktp-error-rw').html(rw)
    $('.create-ktp-error-kelurahan').html(kelurahan)
}

// Fill error field on edit form
function fillErrorEditField(no_kk, nik, nama, jenis_kelamin, tempat_lahir, tanggal_lahir, kewarganegaraan, gol_darah, agama, status_perkawinan, pendidikan, pekerjaan, nama_ayah, nama_ibu, alamat, rt, rw, kelurahan) 
{
    $('.edit-ktp-error-no-kk').html(no_kk)
    $('.edit-ktp-error-nik').html(nik)
    $('.edit-ktp-error-nama').html(nama)
    $('.edit-ktp-error-jenis-kelamin').html(jenis_kelamin)
    $('.edit-ktp-error-tempat-lahir').html(tempat_lahir)
    $('.edit-ktp-error-tanggal-lahir').html(tanggal_lahir)
    $('.edit-ktp-error-kewarganegaraan').html(kewarganegaraan)
    $('.edit-ktp-error-golongan-darah').html(gol_darah)

    $('.edit-ktp-error-agama').html(agama)
    $('.edit-ktp-error-status-perkawinan').html(status_perkawinan)
    $('.edit-ktp-error-pendidikan').html(pendidikan)
    $('.edit-ktp-error-pekerjaan').html(pekerjaan)
    $('.edit-ktp-error-nama-ayah').html(nama_ayah)
    $('.edit-ktp-error-nama-ibu').html(nama_ibu)

    $('.edit-ktp-error-alamat').html(alamat)
    $('.edit-ktp-error-rt').html(rt)
    $('.edit-ktp-error-rw').html(rw)
    $('.edit-ktp-error-kelurahan').html(kelurahan)
}

// Fill Show Form
function fillShowForm(nik, nama, jenis_kelamin, tempat_lahir, tanggal_lahir, kewarganegaraan, gol_darah, agama, status_perkawinan, pendidikan, pekerjaan, nama_ayah, nama_ibu, alamat, rt, rw, kelurahan) 
{
    $('#show-nik').val(nik)
    $('#show-nama').val(nama)
    $('#show-jenis-kelamin').val(jenis_kelamin)
    $('#show-tempat-lahir').val(tempat_lahir)
    $('#show-tanggal-lahir').val(tanggal_lahir)
    $('#show-kewarganegaraan').val(kewarganegaraan)
    $('#show-golongan-darah').val(gol_darah)

    $('#show-agama').val(agama)
    $('#show-status-perkawinan').val(status_perkawinan)
    $('#show-pendidikan').val(pendidikan)
    $('#show-pekerjaan').val(pekerjaan)
    $('#show-nama-ayah').val(nama_ayah)
    $('#show-nama-ibu').val(nama_ibu)

    $('#show-alamat').val(alamat)
    $('#show-rt').val(rt)
    $('#show-rw').val(rw)
    $('#show-kelurahan').val(kelurahan)
}

// Fill Edit Form
function fillEditForm(id, no_kk, nik, nama, jenis_kelamin, tempat_lahir, tanggal_lahir, kewarganegaraan, gol_darah, agama, status_perkawinan, pendidikan, pekerjaan, nama_ayah, nama_ibu, alamat, rt, rw, kelurahan) 
{
    $('#ktp-edit-id').val(id)
    $('#edit-no-kk').val(no_kk)
    $('#edit-nik').val(nik)
    $('#edit-nama').val(nama)
    $('#edit-jenis-kelamin').val(jenis_kelamin)
    $('#edit-tempat-lahir').val(tempat_lahir)
    $('#edit-tanggal-lahir').val(tanggal_lahir)
    $('#edit-kewarganegaraan').val(kewarganegaraan)
    $('#edit-golongan-darah').val(gol_darah)

    $('#edit-agama').val(agama)
    $('#edit-status-perkawinan').val(status_perkawinan)
    $('#edit-pendidikan').val(pendidikan)
    $('#edit-pekerjaan').val(pekerjaan)
    $('#edit-nama-ayah').val(nama_ayah)
    $('#edit-nama-ibu').val(nama_ibu)

    $('#edit-alamat').val(alamat)
    $('#edit-rt').val(rt)
    $('#edit-rw').val(rw)
    $('#edit-kelurahan').val(kelurahan)
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
                $('#ktp-create-modal').modal('hide')
            
            $('#ktp-table').dataTable().fnStandingRedraw()
            clearCreateField()
        },
        error: function(jqXHR) {
            let message = JSON.parse(jqXHR.responseText)

            // If validating process fails, display the error messages
            let no_kk = message.errors.no_kk
            let nik = message.errors.nik
            let nama = message.errors.nama
            let jenis_kelamin = message.errors.jenis_kelamin
            let tempat_lahir = message.errors.tanggal_lahir
            let tanggal_lahir = message.errors.tanggal_lahir
            let kewarganegaraan = message.errors.kewarganegaraan
            let gol_darah = message.errors.gol_darah
            let agama = message.errors.agama
            let status_perkawinan = message.errors.status_perkawinan
            let pendidikan = message.errors.pendidikan
            let pekerjaan = message.errors.pekerjaan
            let nama_ayah = message.errors.nama_ayah
            let nama_ibu = message.errors.nama_ibu
            let alamat = message.errors.alamat
            let rt = message.errors.rt
            let rw = message.errors.rw
            let kelurahan = message.errors.kelurahan

            // Clear error field first
            clearErrorCreateField()
            
            // Show validating error messages
            fillErrorCreateField(no_kk, nik, nama, jenis_kelamin, tempat_lahir, tanggal_lahir, kewarganegaraan, gol_darah, agama, status_perkawinan, pendidikan, pekerjaan, nama_ayah, nama_ibu, alamat, rt, rw, kelurahan)
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
                $('#ktp-edit-modal').modal('hide')

            $('#ktp-table').dataTable().fnStandingRedraw()
        },
        error: function(jqXHR) {
            let message = JSON.parse(jqXHR.responseText)
            
            // If validating process fails, display the error messages
            let no_kk = message.errors.no_kk
            let nik = message.errors.nik
            let nama = message.errors.nama
            let jenis_kelamin = message.errors.jenis_kelamin
            let tempat_lahir = message.errors.tanggal_lahir
            let tanggal_lahir = message.errors.tanggal_lahir
            let kewarganegaraan = message.errors.kewarganegaraan
            let gol_darah = message.errors.gol_darah
            let agama = message.errors.agama
            let status_perkawinan = message.errors.status_perkawinan
            let pendidikan = message.errors.pendidikan
            let pekerjaan = message.errors.pekerjaan
            let nama_ayah = message.errors.nama_ayah
            let nama_ibu = message.errors.nama_ibu
            let alamat = message.errors.alamat
            let rt = message.errors.rt
            let rw = message.errors.rw
            let kelurahan = message.errors.kelurahan
            
            // Clear error field first
            clearErrorEditField()
            
            // Show validating error messages
            fillErrorEditField(no_kk, nik, nama, jenis_kelamin, tempat_lahir, tanggal_lahir, kewarganegaraan, gol_darah, agama, status_perkawinan, pendidikan, pekerjaan, nama_ayah, nama_ibu, alamat, rt, rw, kelurahan)
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

                $('#ktp-table').dataTable().fnStandingRedraw()
            }
        })
    },
    function (dismiss) {
        if (dismiss === 'cancel')
            swal('Batal', 'Aksi dibatalkan!', 'error')
    })
}
// End of Function